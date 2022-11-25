import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [TOKEN, setTOKEN] = useState('123');
    const [cart, setCart] = useState([]);

    return (
        <UserContext.Provider value={{TOKEN, setTOKEN, cart, setCart}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;