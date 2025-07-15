import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie"

export const AppContext = createContext("")

export const AppContextProvider = (props) => {

    const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp");

    //parse the userdata and storing in state
    const [authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : undefined)

    const backendUrl = "http://localhost:3000"

    const value = {
        authUser, setAuthUser, backendUrl
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

//creating a custom hook
export const useAuth = () => useContext(AppContext)