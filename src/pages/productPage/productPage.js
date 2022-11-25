import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import Header from "../components/header";
import Loading from "../components/loading";
import UserContext from "../components/userContext";

export default function ProductPage() {
    const navigate = useNavigate();
    const { TOKEN } = useContext(UserContext);
    const { productName } = useParams();
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState(1);
    const header = {headers: {'Authorization' : `Bearer ${TOKEN}`}};
    const PRODUCTSURL = 'http://localhost:5000/products';
    const CARTURL = 'http://localhost:5000/cart';

    useEffect(() => {
        axios.get(PRODUCTSURL)
            .then((response) => {
                const products = response.data;
                const chosenProduct = products.filter((item) => item.name === productName);

                if (chosenProduct === undefined || chosenProduct.length === 0) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Produto não encontrado'
                    });
                    navigate('/');
                }

                setProduct(chosenProduct[0]);
            })
            .catch((err) => {
                console.log(err);
                navigate('/');
            });
    }, []);

    function sub() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Atenção',
                text: 'Quantidade mínima atingida'
            });
        }
    }

    function add() {
        console.log(product)
        if (quantity < product.quantity) {
            setQuantity(quantity + 1);
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Atenção',
                text: 'Quantidade máxima atingida'
            });
        }
    }

    function buyProduct() {
        const body = {productName, quantity};
        axios.post(CARTURL, body, header)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Compra efetuada com sucesso!',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/cart');
        })
        .catch((err) => {
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'A compra não pôde ser efetuada'
            });
        });
    }


    return (
        <Body>
            <Header />
            {product.length === 0 ? (
                <Loading />
            ) : (
                <>
                    <ProductBriefing>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <div className="line" />
                    </ProductBriefing>

                    <BuyInformations>
                        <h2 className="price">R$ {Number(product.value).toFixed(2)}</h2>
                        <div className="inputQuantity">
                            <div className="button sub" onClick={sub}>-</div>
                            <div className="button number">{quantity}</div>
                            <div className="button add" onClick={add}>+</div>
                        </div>
                    </BuyInformations>

                    <BuyButton onClick={buyProduct}>Finalizar Compra</BuyButton>
                </>
            )}
        </Body>
    );
}

const Body = styled.div`
    background-color: var(--grey);
    width: 100vw;
    height: 100vh;
`;

const ProductBriefing = styled.div`
    background-color: white;
    width: 90vw;
    height: 50vh;
    margin-top: 3rem;
    margin-inline: auto;
    padding-inline: 1.875rem;
    border-radius: 3px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;

    & > img{
        width: 30rem;
        height: 30rem;
        margin: 1.5rem auto 2rem auto;
    }

    & > h2{
        font-size: 21px;
    }

    .line{
        position: absolute;
        bottom: 1.5rem;
        width: calc(88%);
        margin-top: 2rem;
        margin-inline: auto;
        height: .12rem;
        background-color: var(--break-line);
    }
`;

const BuyInformations = styled.div`
    background-color: white;
    width: 90vw;
    height: 8rem;
    margin-top: 1.5rem;
    margin-inline: auto;
    padding-inline: 1.875rem;
    border-radius: 3px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    display: flex;
    align-items: center;
    box-sizing: border-box;

    & > h2{
        width: 50%;
        font-size: 21px;
        color: var(--red);
    }

    .inputQuantity{
        height: 2.4rem;
        width: 50%;
        display: flex;
        align-items: center;

        .button{
            height: 100%;
            width: 30%;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 21px;
            font-weight: 600;
        }
        
        .sub{
            background-color: var(--red);
            border-radius: 5px 0 0 5px;
        }

        .number{
            font-size: 17px;
        }

        .add{
            background-color: var(--green);
            border-radius: 0 5px 5px 0;
        }
    }
`;

const BuyButton = styled.button`
    margin: 3rem 5vw 2rem 5vw;
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
`;