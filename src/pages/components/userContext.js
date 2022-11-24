import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [TOKEN, setTOKEN] = useState('');
    const [products, setProducts] = useState([]);

    return (
        <UserContext.Provider value={{TOKEN, setTOKEN, products, setProducts}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;