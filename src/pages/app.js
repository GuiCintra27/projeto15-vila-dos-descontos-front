import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from "../checkout/checkout";
import Cart from "./cart/cart";
import GlobalStyle from "./components/globalStyle";
import { ProductsProvider } from "./components/productsCotext";
import { UserProvider } from "./components/userContext";
import Home from "./home/home";
import ProductPage from "./productPage/productPage";
import SignIn from "./signin/signin";
import SignUp from "./signup/signup";

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
                            <Route path="/sign-up" element={<SignUp />} />
                            <Route path="/checkout" element={<CheckOut />} />
                        </Routes>
                    </BrowserRouter>
                </ProductsProvider>
            </UserProvider>
        </>
    );
}