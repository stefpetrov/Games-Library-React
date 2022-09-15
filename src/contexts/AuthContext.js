import { createContext, useContext } from "react";

import useSessionStorage from "../hooks/useSessionStorage";

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: ''
}

export const AuthContext = createContext()

export const AuthProvider = ({
    children
}) => {

    const [user, setUser] = useSessionStorage('user', initialAuthState)

    const login = (authData) => {
        if (authData) {
            setUser(authData)
        } else {
            setUser(initialAuthState)
        }
    }


    const logout = () => {
        setUser(initialAuthState)
    }


    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: user.email }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const authState = useContext(AuthContext)
    return authState
}