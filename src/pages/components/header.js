import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import logo from "../../assets/site-elements/LogoWhite.png";
import logoBlue from "../../assets/site-elements/Logo.png";
import { useContext, useEffect } from 'react';
import UserContext from './userContext';
import Swal from 'sweetalert2';

export default function Header({ color = 'blue' }) {
    const { TOKEN, setTOKEN } = useContext(UserContext);
    const navigate = useNavigate();
    
    function logOut() {
        setTOKEN('');
        Swal.fire({
            icon: 'success',
            title: 'Usuário deslogado com sucesso',
            showConfirmButton: false,
            timer: 1500
        })
        navigate('/');
    }

    return (
        <PageHeader color={color} iconColor={color === 'blue' ? 'white' : 'black'}>
            <Link to={'/'}>
                <img src={color === 'blue' ? logoBlue : logo} alt="Logo" />
            </Link>

            <div>
                <Link to={'/cart'}>
                    <ion-icon name="bag-outline"></ion-icon>
                </Link>

                {TOKEN.length === 0 ? (
                    <Link to={'/sign-in'}>
                        <ion-icon name="log-in-outline"></ion-icon>
                    </Link>
                ) : (
                    <ion-icon name="log-out-outline" onClick={logOut} ></ion-icon>
                )}
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