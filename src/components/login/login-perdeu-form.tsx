"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect, useState } from "react";
import styles from "./login-form.module.css";
import passwordLost from "@/actions/password-lost";

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>Enviando...</Button>
      ) : (
        <Button>Enviar Email</Button>
      )}
    </>
  );
}

export default function LoginPerdeuForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  const [url, seturl] = useState("");

  useEffect(() => {
    seturl(window.location.href.replace("perdeu", "resetar"));
  }, []);

  return (
    <form action={action} className={styles.form}>
      <Input label="Email / Usuário" name="login" />
      <input type="hidden" name="url" value={url} />
      <ErrorMessage error={state.error} />
      {state.ok ? (
        <p style={{ color: "#4c1" }}>Email enviado</p>
      ) : (
        <FormButton />
      )}
    </form>
  );
}
