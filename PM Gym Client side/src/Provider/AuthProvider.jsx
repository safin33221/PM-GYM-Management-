import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
export const authContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser => {
        setLoading(false)
        setUser(currentUser);


        return () => {
            unsubscribe()
        }
    }))
    const authValue = {
        createUser,
        signoutUser,
        updateUserProfile,
        signInUser,
        user
    }
    return (
        <authContext.Provider value={authValue}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;