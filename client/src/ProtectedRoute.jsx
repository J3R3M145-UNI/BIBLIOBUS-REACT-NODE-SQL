import { UseAuth } from './context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const { isAuthenticated } = UseAuth()

    if (!isAuthenticated)
    {
        return <Navigate to='/login' />
    }

    return <Outlet />
}

export default ProtectedRoute;