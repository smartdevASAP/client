import { createContext, useState, useEffect, useContext } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

//type to declare the users (email na akina username na the other stuffs like bio)
type AppContextType = {
  username: string;
  setUsername: (val: string) => void;
  saveUser: () => void;
  deleteUser: () => void;
  firstname: string;
  setFirstname: (val: string) => void;
  lastname: string;
  setLastname: (val: string) => void;
  phone: string;
  setPhone: (val: string) => void;
  birthDay: string;
  setBirthDay: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  confirmPassword: string;
  setConfirmPassword: (val: string) => void;
  bio: string;
  setBio: (val: string) => void;
  pronouns: string;
  setPronouns: (val: string) => void;
  confirmPhone: string;
  setConfirmPhone: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  sendToServer: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  //all authentication details are to be kept here
  const [username, setUsername] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [firstname, setFirstname] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [lastname, setLastname] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [phone, setPhone] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [birthDay, setBirthDay] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [password, setPassword] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [confirmPassword, setConfirmPassword] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [bio, setBio] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [pronouns, setPronouns] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [confirmPhone, setConfirmPhone] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const [email, setEmail] = useState<string>(
    localStorage.getItem("username") || ""
  );
  const navigate = useNavigate();
  //finish up button
  const sendToServer = (): any => {
    console.log({
      username,
      firstname,
      lastname,
      phone,
      birthDay,
      password,
      pronouns,
      confirmPassword,
      confirmPhone,
      email,
      bio,
    });
    navigate("/dashboard");
    localStorage.clear();
  };

  //----END OF AUTHENTICATION DETAILS
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
      value={{
        username,
        setUsername,
        deleteUser,
        saveUser,
        firstname,
        setFirstname,
        lastname,
        setLastname,
        phone,
        setPhone,
        birthDay,
        setBirthDay,
        password,
        setPassword,
        pronouns,
        setPronouns,
        confirmPassword,
        setConfirmPassword,
        confirmPhone,
        setConfirmPhone,
        email,
        setEmail,
        bio,
        setBio,
        sendToServer,
      }}
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
