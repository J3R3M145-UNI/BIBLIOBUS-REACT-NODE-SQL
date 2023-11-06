import { createContext, useState, useContext, useEffect } from "react";
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
    const [errors, setErrors] = useState([[]])

    const signup = async (user) => {

        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            setUser(res.data)
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }
            setErrors([error.response.data])
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => { // This will clear the errors after 5 seconds
                setErrors([])
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [errors])

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

