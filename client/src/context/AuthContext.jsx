import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth';
import Cookies from 'js-cookie'

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
    const [loading, setLoading] = useState(true)

    const signup = async (user) => {

        try {
            const res = await registerRequest(user)
            //console.log(res.data)
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
            setIsAuthenticated(true)
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data)
            }
            setErrors([error.response.data])
        }
    }

    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        setIsAuthenticated(false)
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => { // This will clear the errors after 4 seconds
                setErrors([])
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        async function checkLogin() {

            const cookies = Cookies.get()

            if (!cookies.token) {
                setIsAuthenticated(false)
                setLoading(false)
                return setUser(null)
            }

            try {
                const res = await verifyTokenRequest(cookies.token)
                if (!res.data) {
                    setIsAuthenticated(false)
                    setLoading(false)
                    return;
                }

                setIsAuthenticated(true)
                setUser(res.data)
                setLoading(false)

            } catch (error) {

                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
            }
        }

        checkLogin()
    }, [])

    return (
        <AuthContext.Provider value={{ // This is the value that will be passed to the components that use this context
            user,
            signup,
            signin,
            isAuthenticated,
            errors,
            loading,
            logout,
        }}>

            {children}
        </AuthContext.Provider>)
}

