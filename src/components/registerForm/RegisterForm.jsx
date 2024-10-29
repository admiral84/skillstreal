"use client";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import styles from "./registerForm.module.css";
import { register } from "@/app/lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";
function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <div className={styles.container}>
      <form action={formAction} className={styles.form}>
        <input
          className={styles.champs}
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          className={styles.champs}
          type="text"
          placeholder="email"
          name="email"
        />
        <input
          className={styles.champs}
          type="password"
          placeholder="password"
          name="password"
        />
        <input
          className={styles.champs}
          type="password"
          placeholder="retape password"
          name="passwordRetape"
        />

        <button className={styles.bouton}> Register</button>
        <span className={styles.errorMessage}> {state?.error} </span>
        <Link href="/login">
          Have an account ? <b>login</b>
        </Link>
      </form>
    </div>
  );
}

export default RegisterForm;
