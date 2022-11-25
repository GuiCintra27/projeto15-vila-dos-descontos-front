import axios from 'axios';
import { useContext, useEffect } from 'react';
import styled from "styled-components";
import Header from '../components/header';
import cover from '../../assets/site-elements/Background.png';
import Product from './product';
import ProductsContext from '../components/productsCotext';

export default function Home() {
    const {products, setProducts} = useContext(ProductsContext);
    const URL = 'http://localhost:5000/products';

    useEffect(() => {
        axios.get(URL)
        .then((response) => {
            const productsResponse = response.data;
            setProducts([...productsResponse]);
        })
        .catch((err) => {
            console.log(err);
        });
    },[])

    return (
        <>
            <Header/>

            <Cover src={cover} alt='cover'/>

            <ProductsDescription>Produtos em Destaque</ProductsDescription>

            <Products>
                {products.map((item, index) => (
                    <Product key={index} name={item.name} image={item.image} value={item.value}/>
                ))}
            </Products>
        </>
    );
}

const Cover = styled.img`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const Products = styled.div`
    overflow: scroll;
    margin-inline: auto;
    width: 95%;
    height: 20rem;
    padding-inline: 1rem;
    background-color: var(--white);
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    ::-webkit-scrollbar{
      width: 0px;
      height: 0px;
    }

    ::-webkit-scrollbar-track{
      background: transparent;
    }
`;

const ProductsDescription = styled.h1`
    font-size: 20px;
    font-weight: 500;
    margin-left: 1rem;
    margin-bottom: 1rem;
`;