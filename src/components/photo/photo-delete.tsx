"use client";
import React from "react";
import styles from "./photo-delete.module.css";

export default function PhotoDelete({ id }: { id: string }) {
  return <button>Deletar: {id}</button>;
}
