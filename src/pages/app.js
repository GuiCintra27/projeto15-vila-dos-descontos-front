import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./cart/cart";
import GlobalStyle from "./components/globalStyle";
import { ProductsProvider } from "./components/productsCotext";
import { UserProvider } from "./components/userContext";
import Home from "./home/home";
import ProductPage from "./productPage/productPage";
import SignIn from "./signup/signin";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <UserProvider>
                <ProductsProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/product/:productName" element={<ProductPage />} />
                            <Route path="/sign-in" element={<SignIn />} />
                        </Routes>
                    </BrowserRouter>
                </ProductsProvider>
            </UserProvider>
        </>
    );
}