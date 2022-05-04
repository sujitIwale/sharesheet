import { useContext } from "react"
import { AuthContext } from "../context/auth/AuthState"

export const useAuth = () => {
    const authContext = useContext(AuthContext)

    return authContext
}