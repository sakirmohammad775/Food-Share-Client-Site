import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from '../config/firebase.config'


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    const logout=()=>{
        setIsLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setIsLoading(false)
        });
        return () => {
            return subscribe();//cleanup function
        }
    }, [])
    //empty string use kora hoi jate sathe sathe run hoi



    const values = { createUser, login, user, isLoading ,logout}
    return (
        <div>
            <AuthContext.Provider value={values}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;