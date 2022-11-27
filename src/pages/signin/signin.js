import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import Logo from "../../assets/site-elements/LogoWhite.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserContext from "../components/userContext";

function SignIn() {
    const {setTOKEN} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const nav = useNavigate();

    function Register() {
        const Api = "https://vila-dos-descontos.onrender.com/sign-in"

        const objUser = {
            email,
            password
        };

        axios.post(Api, objUser)
        .then((response) => {
            setTOKEN(response.data);
            nav("/");
        })
        .catch((err) => console.log(err.details.error));
    }

    function CheckRegister(e) {
        e.preventDefault();
        Register()
    }

    return (
        <App onSubmit={CheckRegister}>
            <Header>
                <img src={Logo} alt="LogoWhite" />
            </Header>
            <>
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="email" />
                <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password" />
                <button type="submit"><h1>ENTRAR</h1></button>
            </>
            <Link to="/sign-up"><p>Não possui conta? Cadastra-se agora!</p></Link>
        </App>
    )

}

const App = styled.form`
    width: 100vw;
    min-height: 600px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: #5271FF;
    & input{
        width: 60vw;
        height: 40px;
        border: 1px solid #A5B5FF;
        border-radius: 10px;
        padding: 10px;
    } & button{
        width: 60vw;
        margin-top: 30px;
        height: 40px;
        border: 1px solid grey;
        background-color: #FFFFFF;
        border-radius: 20px;
        color: #5271FF;
        cursor: pointer;
        margin-bottom: 20px;
    } & h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
    } & p{
        color: #FFFFFF;
    }
`
const Header = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
    margin-bottom: 75px;
    & img{
        width: 50vw;
    }
`

export default SignIn;