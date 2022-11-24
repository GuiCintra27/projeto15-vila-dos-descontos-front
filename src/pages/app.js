import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/globalStyle";
import { UserProvider } from "./components/userContext";
import Home from "./home/home";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    );
}