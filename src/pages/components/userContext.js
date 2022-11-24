import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [TOKEN, setTOKEN] = useState('123');
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    return (
        <UserContext.Provider value={{TOKEN, setTOKEN, products, setProducts, cart, setCart}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;