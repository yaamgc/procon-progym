import type { User } from "firebase/auth";
import { createContext, useContext } from "react";

export const UserContext = createContext<string>("");
export const useUser = () => {
    return useContext(UserContext);
};