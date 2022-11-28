import styled from "styled-components";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserContext from "../pages/components/userContext";

function CheckOut() {

    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [hNumber, setHNumber] = useState();
    const [thing, setThing] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [cep, setCEP] = useState();

    /* --------------------State for Axios/Context--------------------- */

    const [product, setProduct] = useState([]);
    const { TOKEN } = useContext(UserContext);
    const ApiCart = "https://vila-dos-descontos.onrender.com/cart"

    useEffect(()=> {
        const authorization = { headers: { "Authorization": `Bearer ${TOKEN}` } };
        const promise = axios.get(ApiCart, authorization)
        promise.then((props) => {
            console.log(props.data)

        })
        promise.catch((error) => alert(error))
    }, [])

    function ConfirmBuy(){

        const Api = ""

        const DadosCompra = {
            headers: {
                name
            },
            street,
            hNumber,
            thing,
            neighborhood,
            city,
            state,
            cep
            
        }

        const promise = axios.post(Api ,DadosCompra)
        promise.then((props) => {
            setProduct(props.data)

        })
        promise.catch((error) => alert(error))

    }

    function Buy(e){
        e.preventDefault();
        ConfirmBuy();
    }

    return (
        <App>
            <Product>

            </Product>
            <Submit onSubmit={Buy}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Nome Completo" required />
                <Teste>
                    <input type="text" onChange={(e) => setStreet(e.target.value)} placeholder="Rua/Logradouro" required />
                    <input type="text" onChange={(e) => setHNumber(e.target.value)} placeholder="Número da casa/apto" required />
                </Teste>
                <Teste>
                    <input type="text" onChange={(e) => setThing(e.target.value)} placeholder="Complemento" required />
                    <input type="text" onChange={(e) => setNeighborhood(e.target.value)} placeholder="Bairro" required />
                </Teste>
                <Teste>
                    <input type="text" onChange={(e) => setState(e.target.value)} placeholder="Estado" required />
                    <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Cidade" required />
                </Teste>
                <input type="text" onChange={(e) => setCEP(e.target.value)} placeholder="CEP" required />
                <button type="submit"><h1>CONFIRMAR COMPRA</h1></button>
            </Submit>
        </App>
    )

}

const App = styled.div`
    box-sizing: border-box;
    padding-left: 15vw;
    padding-right: 15vw;
    width: 100vw;
    height: 100vh;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
`

const Submit = styled.form`
    display: flex;
    margin-top: 100px;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    & > input{
        border: none;
        width: 100%;
        height: 30px;
        padding: 10px;
        border-radius: 5px;
    } & button {
        border-radius: 5px;
        height: 30px;
        border: none;
        margin-top: 20px;

    } & h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
    }

`

const Teste = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    width: 100%;
    & > input{
        border: none;
        width: 90%;
        height: 30px;
        padding: 10px;
        border-radius: 5px;
    }

`
const Product = styled.div`


`


export default CheckOut;
