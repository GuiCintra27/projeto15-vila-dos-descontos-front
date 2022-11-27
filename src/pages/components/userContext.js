import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [TOKEN, setTOKEN] = useState('a25769f9-25cc-4149-a59d-fcf66d223935');
    const [cart, setCart] = useState([]);

    return (
        <UserContext.Provider value={{TOKEN, setTOKEN, cart, setCart}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;