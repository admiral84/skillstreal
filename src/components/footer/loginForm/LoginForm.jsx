"use client";
//import React, { useEffect } from "react";
import { useFormState } from "react-dom";

import { login } from "@/app/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./loginForm.module.css";

function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <form className={styles.form} action={formAction}>
        <input
          className={styles.champs}
          type="text"
          placeholder="email or username"
          name="username"
        />
        <input
          className={styles.champs}
          type="password"
          placeholder="password"
          name="password"
        />
        <button className={styles.bouton}>login</button>
        <Link href="/register">
          <span className={styles.errorMessage}> {state?.error}</span> <br/>
          {" Don't have account?  "}
          <b>Register</b>
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
