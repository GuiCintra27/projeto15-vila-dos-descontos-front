import styled from "styled-components";

export default function Home(){
    return(
        <>
            <Header>
                <img src="" alt="Logo"/>

                <div>

                </div>
            </Header>
        </>
    );
}

const Header = styled.header`
    width: 100%;
    height: 7.5rem;
    background-color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: space-between;
`;