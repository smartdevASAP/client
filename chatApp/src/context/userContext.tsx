import { createContext, useState, useEffect, useContext } from "react";
import type { ReactNode } from "react";

//type to declare the users (email na akina username na the other stuffs like bio)
type AppContextType = {
  username: string;
  setUsername: (val: string) => void;
  saveUser: () => void;
  deleteUser: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") || ""
  );
  //-----
  //user-related functions
  // 1) saving
  const saveUser = (): void => {
    localStorage.setItem("username", username);
    console.log(username);
  };
  //2)deleting/removing
  const deleteUser = (): void => {
    localStorage.removeItem("username");
    console.log("removed the user");
  };
  //saving the username again incase the value changes
  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);
  return (
    <AppContext.Provider
      value={{ username, setUsername, deleteUser, saveUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};
