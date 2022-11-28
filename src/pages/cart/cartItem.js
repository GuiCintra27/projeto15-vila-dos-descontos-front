import styled from "styled-components";

export default function CartItem({name, image, quantity, value}) {
    const formatedValue = Number(value).toFixed(2);

    return (
        <>
            <Item>
                <div>
                    <img src={image} alt={name} />
                    <p>{name}</p>
                </div>
                <p className="quantity">{quantity}</p>
                <p className="value">R$ {(formatedValue * quantity).toFixed(2)}</p>
            </Item>
            <Line />
        </>
    );
}

const Item = styled.div`
    width: 90vw;
    height: fit-content;
    margin-top: 2rem;
    margin-inline: auto;
    display: flex;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 16rem;

        img{
            width: 16rem;         
            height: 16rem;
        }
    }

    & > .quantity{
        text-align: center;
        width: 7.8rem;
        margin-left: 1rem;
        font-size: 17px;
    }

    & > .value{
        margin-left: 1rem;
        width: 8.5rem;
        word-break: break-all;
        font-weight: 600;
        font-size: 14px;
    }
`;

const Line = styled.div`
    width: 90vw;
    margin-top: 2rem;
    margin-inline: auto;
    height: .12rem;
    background-color: var(--break-line);
`;