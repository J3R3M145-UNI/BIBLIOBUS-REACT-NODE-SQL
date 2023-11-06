import { createContext, useState, useContext } from "react";
import { registerRequest, loginRequest } from '../../api/auth';

export const AuthContext = createContext();

export const UseAuth = () => {
    const context = useContext(AuthContext) // This is the hook that will be used in the components that need the context
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => { // This is the component that will wrap the components that need the context
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setError] = useState([[]])

    const signup = async (user) => {

        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {   
            setError(error.response.data)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            setUser(res.data)
        } catch (error) {
            console.log(error.response.data)
            setError(error.response.data)
        }
    }   


    return (
        <AuthContext.Provider value={{ // This is the value that will be passed to the components that use this context
            user,
            signup,
            signin,
            isAuthenticated,
            errors
        }}>

            {children}
        </AuthContext.Provider>)
}

