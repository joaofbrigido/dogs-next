"use client";

import { useUser } from "@/context/user-context";

export default function ContaPage() {
  const { user } = useUser();
  return (
    <div>
      <h1>conta</h1>
    </div>
  );
}
