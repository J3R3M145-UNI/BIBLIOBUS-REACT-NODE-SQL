import { UseAuth } from './context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const { loading, isAuthenticated } = UseAuth()

    if (loading) return <h1>Estoy cargando</h1>
    if (!loading && !isAuthenticated) return <Navigate to='/login' replace />

    return <Outlet />
}

export default ProtectedRoute;