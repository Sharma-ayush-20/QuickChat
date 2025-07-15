import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from '../context/AppContext.jsx'
import io from "socket.io-client"

const SocketContext = createContext();

//creating custom hooks
export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketContextProvider = (props) => {

    const [socket, setSocket] = useState(null);
    const { authUser, backendUrl } = useAuth()
    const [onlineUsers, setOnlineUsers] = useState([])

    useEffect(() => {
        if (authUser) {
            const socket = io(`${backendUrl}`,
                {
                    query: {
                        userId: authUser.user._id
                    }
                }
            );
            setSocket(socket);
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            });
            return () => socket.close();
        }
        else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser])

    return <SocketContext.Provider value={{socket, onlineUsers}}>
        {props.children}
    </SocketContext.Provider>
}