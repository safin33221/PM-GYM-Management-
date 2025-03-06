import { createContext } from "react";

export const authContext = createContext(null)

const AuthProvider = ({ children }) => {

    const authValue = {
        
    }
    return (
        <authContext.Provider value={authValue}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;