import { Navigate } from "react-router-dom"

function PrivateRoute({element}) {
    const token = localStorage.getItem('token')
    if(token) {
        return element
    } else {
        return <Navigate to="/login" />
    }
}

export default PrivateRoute