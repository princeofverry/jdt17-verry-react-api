import { Outlet, useLocation } from 'react-router'
import { useToken } from '@/hooks/useToken'

const ProtectedRoute = () => {
    const { pathname } = useLocation()
    const { user } = useToken()

    const tokenProtected = ["/", "/cv-page", "/todo", "/movie-page"]
    const auth = ["/login"]

    const isProtected = tokenProtected.some(route => {
        if (route === "/") {
            return pathname === "/";
        }
        return pathname === route || pathname.startsWith(route + "/");
    });

    if (isProtected) {
        if (!user?.accessToken) {
            window.location.href = "/login"
        }
    }

    if (auth.includes(pathname)) {
        if (user?.accessToken) {
            window.location.href = "/"
        }
    }

    return <Outlet />
}

export default ProtectedRoute