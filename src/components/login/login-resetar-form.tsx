"use client";

import { useFormState, useFormStatus } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect, useState } from "react";
import styles from "./login-form.module.css";
import passwordReset from "@/actions/password-reset";

type LoginResetarFormProps = {
  keyToken: string;
  login: string;
};

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>Resetando...</Button>
      ) : (
        <Button>Resetar Senha</Button>
      )}
    </>
  );
}

export default function LoginResetarForm({
  keyToken,
  login,
}: LoginResetarFormProps) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: "",
    data: null,
  });

  return (
    <form action={action} className={styles.form}>
      <Input label="Nova Senha" name="password" type="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
