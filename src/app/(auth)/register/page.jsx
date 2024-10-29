import React from "react";
import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/RegisterForm";

function Register() {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
}

export default Register;
