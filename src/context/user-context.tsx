"use client";

import logout from "@/actions/logout";
import validadeToken from "@/actions/validate-token";
import React, { useEffect, useState } from "react";

type User = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error("useContext deve estar dentro do Provider");
  }
  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUser] = useState<User | null>(user);

  useEffect(() => {
    async function validate() {
      const { ok } = await validadeToken();
      if (!ok) await logout();
    }
    if (userState) validate();
  }, [userState]);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
