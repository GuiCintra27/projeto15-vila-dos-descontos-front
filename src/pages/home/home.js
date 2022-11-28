import axios from 'axios';
import { useContext, useEffect } from 'react';
import styled from "styled-components";
import Header from '../components/header';
import cover from '../../assets/site-elements/Background.png';
import Product from './product';
import ProductsContext from '../components/productsCotext';
import Loading from '../components/loading';

export default function Home() {
    const { products, setProducts } = useContext(ProductsContext);
    const URL = 'https://vila-dos-descontos.onrender.com/products';

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                const productsResponse = response.data;
                setProducts([...productsResponse]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <>
            <Header />

            <Cover src={cover} alt='cover' />

            {products.length === 0 ? (
                <Loading />
            ) : (
                <>
                    <ProductsDescription>Produtos em Destaque</ProductsDescription>

                    <Products>
                        {products.map((item, index) => (
                            <Product key={index} name={item.name} image={item.image} value={item.value} />
                        ))}
                    </Products>
                </>
            )}

        </>
    );
}

const Cover = styled.img`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const Products = styled.div`
    width: 88%;
    height: fit-content;
    margin-inline: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    background-color: var(--white);
`;

const ProductsDescription = styled.h1`
    font-size: 20px;
    font-weight: 500;
    margin-left: 1rem;
    margin-bottom: 3rem;
`;