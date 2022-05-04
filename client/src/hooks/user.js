import { useEffect, useState } from "react"
import { getLocalStorage } from "../helpers/auth"

export const useUser = () => {
    const [User, setUser] = useState(null)
    
    useEffect(() =>{
        setUser(getLocalStorage('user'))
    },[])
    return User
}