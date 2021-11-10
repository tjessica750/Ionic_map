import React, { useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth'

interface Auth {
    loggedIn: Boolean;
    userId?: string;
    userData?: any;
}
interface AuthInit {
    loading: Boolean;
    auth?: Auth;
}

export const AppContext = React.createContext<Auth>({ loggedIn: false });

export function useAuth(): Auth {
    console.log("auth used");
    return useContext(AppContext)
}

export function useAuthInit(): AuthInit {
    const [authInit, setAuthInit] = useState<AuthInit>({ loading: true });
    const firebaseAuth = getAuth();

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (firebaseUser) => {
            const auth = firebaseUser
                ? { loggedIn: true, userId: firebaseUser.uid, userData: firebaseUser }
                : ({ loggedIn: false })
            setAuthInit({ loading: false, auth });
        });
    }, [])
    return authInit;
}

