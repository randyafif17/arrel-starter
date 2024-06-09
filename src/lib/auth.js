import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDb from "./utils";
import { User } from "./models";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
    try {
        await connectToDb()
        const user = await User.findOne({username: credentials.username})

        if (!user) {
            throw new Error("User not found");
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordCorrect) {
            throw new Error("Wrong credentials")
        }

        return user;

    } catch (err) {
        console.log(err)
        throw new Error("Failed to login!")
    }
}

export const {
    handlers:{GET, POST}, 
    auth, 
    signIn, 
    signOut
} = NextAuth ({

    providers: [
        GitHub({
            clientId:  process.env.GITHUB_ID,
            clientSecret:  process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) { 
                try {
                    const user = await login(credentials)
                    return user;
                } catch (err) {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async signIn({user, account, profile}) {
            console.log(user, account, profile);
            if (account.provider === "github") {
                await connectToDb();
                try {
                    const user = await User.findOne({email: profile.email})
                    if (!user) {
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            Image: profile.avatar_url,
                        });
                        await newUser.save();
                    }
                } catch (err) {
                    console.log(err)
                    return false;
                }
            }
            return true;
        },
    },
});