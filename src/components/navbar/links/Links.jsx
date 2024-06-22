// links/Links.js
"use client";

import NavLink from "./navLink/navLink";
import AdminDropdown from "./adminDropdown"; // import the new component
import styles from "./links.module.css";
import Image from "next/image";
import { useState } from "react";
import { handleLogout } from "@/lib/action";

const Links = ({session}) => {
    const [open, setOpen] = useState(false);
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    const isAdmin = session?.user?.isAdmin;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}

                {session?.user ? (
                    <>
                        {isAdmin && <AdminDropdown />} {/* Use the new component here */}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            <Image 
                className={styles.menuButton}
                src="/menu.png" 
                alt="" 
                width={30} 
                height={30} 
                onClick={() => setOpen(prev => !prev)}
            />
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                    {isAdmin && <AdminDropdown />} {/* Use the new component here */}
                </div>
            )}
        </div>
    );
};

export default Links;
