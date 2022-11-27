import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import Logo from "../../assets/site-elements/LogoWhite.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [type, setType] = useState("");
    const nav = useNavigate();

    function Register(e){

        const Api = "https://vila-dos-descontos.onrender.com/sign-in";
        
        const objUser = {
            name,
            email,
            password,
            type
        }

        console.log(objUser);

        const promise = axios.post(Api, objUser);
        promise.then(() => {

            nav("/sign-in");


        });
        promise.catch((err) => err.details.error)
        

    }

    function CheckRegister(e){
        e.preventDefault();
        Register()
    }

    return (
        <App onSubmit={CheckRegister}>
            <Header>
                <img src={Logo} alt="LogoWhite" />
            </Header>
            <input placeholder="Name" onChange={(e) => setName(e.target.value)} type="text" />
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="email" />
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password" />
            <input placeholder="Cliente/Vendedor" onChange={(e) => setType(e.target.value)} type="text" />
            <button type="submit"><h1>CADASTRAR</h1></button>
            <Link to="/sign-in"><p>Já possui um cadastro? Faça seu Login!</p></Link>
        </App>
    )

}

const App = styled.form`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
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
    } & h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
    } & p{
        color: white;
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

export default SignUp;