import styled from "styled-components";

export default function Product({name, image, value}){
    const formatedValue = Number(value).toFixed(2);
    return(
        <Container>
            <img src={image} alt={name}/>

            <h4>{name}</h4>

            <p>R$ {formatedValue}</p>
        </Container>
    )
}

const Container = styled.div`
    width: 15rem;
    height: 18rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

    img{
        height: 10rem;
        width: 15rem;
        margin-top: .5rem;
        margin-inline: auto;
    }

    h4{
        margin-inline: 1rem;
        font-weight: 400;
        font-size: 14px;
    }

    p{
        position: absolute;
        margin-inline: 1rem;
        bottom: 1rem;
        color: var(--red);
        font-size: 16px;
    }
`;