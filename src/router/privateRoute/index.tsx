import { Routes, Route, Navigate } from 'react-router-dom';
import { useLogin } from '../../store/auth/hooks';

interface PrivateRouteProps{
    path: string,
    children: React.ReactNode
}

const PrivateRoute = ({ children }:PrivateRouteProps) => {
    const isAuthenticated = useLogin()
  return isAuthenticated ? (
    <Routes>
    <Route path={"*"} element={children} />
</Routes>
) : (
<Navigate to="/" replace />
);
};

export default PrivateRoute;
