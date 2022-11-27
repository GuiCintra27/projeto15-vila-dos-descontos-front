import axios from "axios";
import Swal from 'sweetalert2'
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import UserContext from "../components/userContext";
import CartItem from "./cartItem";
import Loading from "../components/loading";

export default function Cart() {
    const navigate = useNavigate();
    const { TOKEN, cart, setCart } = useContext(UserContext);
    const URL = 'https://vila-dos-descontos.onrender.com/cart';
    const header = { headers: { "Authorization": `Bearer ${TOKEN}` } };

    useEffect(() => {
        axios.get(URL, header)
            .then((response) => {
                const cartUpdated = response.data;
                setCart(cartUpdated);
            })
            .catch((err) => {
                let error = err.response.data;
                if (error === 'Not Found') {
                    error = 'Usuário não está logado';
                }
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error
                });
                navigate('/');
            });
    }, []);

    return (
        <>
            <Header />
            <Container>

                <h1>Meu carrinho</h1>
                <div className="productsContainer">
                    <div className="informations">
                        <h4>Produto</h4>
                        <h4>qtd</h4>
                        <h4>preço</h4>
                    </div>

                    <div className="topLine" />

                    {cart.length === 0 ? (
                        <Loading />
                    ) : (
                        <>
                            <div className="scroll">
                                {
                                    cart.map((item, index) => (
                                        <CartItem key={index} name={item.name} image={item.image} quantity={item.quantity} value={item.value} />
                                    ))
                                }

                            </div>
                        </>
                    )}
                </div>

                <Link to={'/checkout'}>
                    <button>Finalizar Compra</button>
                </Link>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    background-color: white;

    & > h1{
        width: 90vw;
        margin-inline: auto;
        font-size: 22px;
    }

    & > .productsContainer{
        height: calc(87vh - 7.5rem);
        margin-top: 2rem;
        margin-inline: auto;
        width: 98vw;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        background-color: white;

        & > .scroll{
            height: calc(80vh - 7.5rem);
            overflow-y: scroll;
        }
        
        & > .informations{
           margin-top: 2rem;
           width: 90vw;
           margin-inline: auto;
           display: flex;
           align-items: center;
    
           h4{
               font-size: 16px;
           }
    
           & > h4:nth-child(2){
               margin-left: 14rem;
           }
    
           & > h4:nth-child(3){
               margin-left: 5rem;
           }
       }
       
       & > .topLine{
           width: 90vw;
           margin-top: .75rem;
           margin-inline: auto;
           height: .17rem;
           background-color: var(--break-line);
       }
    }

    & > a{
        display: flex;
        justify-content: center;
    }

    & > a > button{
        margin: 2rem auto 2rem auto;
        height: 5rem;
        width: 90vw;
        border-radius: 5px;
        border: none;
        background: var(--blue);
        box-shadow: var(--blue) 0 10px 20px -10px;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 700;
        outline: 0 solid transparent;
        padding: 8px 18px;
    }
`;