import { useContext } from "react";
import { createContext,useState } from "react";

const AulthContext = createContext(null)

export function AulthProvider({children}){
    const [user,setUser] = useState({})
    function Login(user){
        setUser(user)
    }
    function Logout(){
        setUser(null)
    }
    return <AulthContext.Provider value={{user,Login,Logout}}>{children}</AulthContext.Provider>
}

export function useAulth(){
    return useContext(AulthContext)
}