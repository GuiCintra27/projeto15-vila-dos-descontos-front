import axios from "axios";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/header";
import UserContext from "../components/userContext";
import CartItem from "./cartItem";

export default function Cart() {
    const { TOKEN, cart, setCart } = useContext(UserContext);
    const URL = 'http://localhost:5000/cart';
    const header = { headers: { "Authorization": `Bearer ${TOKEN}` } };

    useEffect(() => {
        axios.get(URL, header)
            .then((response) => {
                const cartUpdated = response.data;
                setCart(cartUpdated);
            })
            .catch((err) => {
                console.log(err);
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

                    <div className="scroll">
                        {
                            cart.map((item) => (
                                <CartItem name={item.name} image={item.image} quantity={item.quantity} value={item.value} />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 7.5rem);
    display: flex;
    flex-direction: column;
    background-color: var(--blue);
    padding-top: 4rem;

    & > h1{
        width: 90vw;
        margin-inline: auto;
        color: var(--white);
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
`;