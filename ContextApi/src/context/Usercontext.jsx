
//  step 1 ; we have to create the context

import { createContext, useContext } from "react";

let userContext = createContext()



// step 2: we have to create the provider
 
let UserProvider = ({children})=>{
    return(
        <userContext.Provider value={{playerName:"Rohit", age:25}}>
            {children}
        </userContext.Provider>
    )
}

// step4:  create custom hook

export const useCustom =()=>{
    let p = useContext(userContext)
    return p 
}

export default  UserProvider