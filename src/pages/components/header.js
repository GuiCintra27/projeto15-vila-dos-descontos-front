import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from "../../assets/site-elements/LogoWhite.png";
import logoBlue from "../../assets/site-elements/Logo.png";

export default function Header({color='blue'}) {
    return (
        <PageHeader color={color} iconColor={color === 'blue' ? 'white' : 'black'}>
            <Link to={'/'}>
                <img src={color === 'blue' ? logoBlue : logo} alt="Logo" />
            </Link>

            <div>
                <Link to={'/cart'}>
                    <ion-icon name="bag-outline"></ion-icon>
                </Link>

                <Link to={'/sign-in'}>
                    <ion-icon name="log-in-outline"></ion-icon>
                </Link>
            </div>
        </PageHeader>
    );
}

const PageHeader = styled.header`
    width: 100%;
    height: 7.5rem;
    background-color: var(--${props => props.color});
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 1rem;
    box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);

    a{
        height: 100%;
    }

    & > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 8rem;

        a{
            display: flex;
            align-items: center;
        }

        ion-icon{
            font-size: 30px;
            color: ${props => props.iconColor};
        }
    }
`;