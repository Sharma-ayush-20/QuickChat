import { createContext, useState, useEffect } from "react";
import { useAuth } from '../context/AppContext.jsx'
import io from "socket.io-client"

const SocketContext = createContext();

export const SocketContextProvider = (props) => {

    const [socket, setSocket] = useState(null);
    const { authUser } = useAuth()

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:3000",
                {
                    query: {
                        userId: authUser.user._id
                    }
                }
            );
            setSocket(socket);
        }
    }, [authUser])

    return <SocketContext.Provider value={{socket}}>
        {props.children}
    </SocketContext.Provider>
}