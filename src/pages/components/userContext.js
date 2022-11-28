import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [TOKEN, setTOKEN] = useState('');
    const [cart, setCart] = useState(0);

    return (
        <UserContext.Provider value={{TOKEN, setTOKEN, cart, setCart}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;