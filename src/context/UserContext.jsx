import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDoc } from '../utils/firebase/firebase';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const values = { currentUser, setCurrentUser }

    useEffect(() => {
        const changeUser = onAuthStateChangedListener((user) => {
            if (user) createUserDoc(user);
            setCurrentUser(user);
        });

        return changeUser;
    }, []);

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}