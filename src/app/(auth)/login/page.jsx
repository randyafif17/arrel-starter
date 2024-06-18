import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin} from "@/lib/action";
import styles from "./login.module.css"
import { auth } from "@/lib/auth";
import Router from "next/navigation";

const LoginPage = () => {
  auth?.user?.isAdmin && Router.push("/")
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button><i class="fa-brands fa-github"></i><span>Login with Github</span></button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage