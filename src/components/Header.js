import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {

    const [menuOpenStatus, setMenOpenStatus] = useState(false);
    const cars = useSelector(selectCars);

    const toggleMenu = () => {
        setMenOpenStatus(() => {
            return !menuOpenStatus;
        });
    }

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt="Tesla Logo" />
            </a>
            <Menu>
                {cars.map((car, index) => {
                    return <a href="#" key={index}>{car}</a>
                })}
            </Menu>
            <SideMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <HamburgerMenu onClick={toggleMenu} />
            </SideMenu>
            <SideNavigationMenu show={menuOpenStatus}>
                <SideMenuButtons>
                    <CloseButon onClick={toggleMenu} />
                </SideMenuButtons>
                {cars.map((car, index) => {
                    return <li><a href="#" key={index}>{car}</a></li>
                })}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
            </SideNavigationMenu>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding:  20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const SideMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right:10px;
        flex-wrap: nowrap;
    }
`;

const HamburgerMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const SideNavigationMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    width: 300px;
    z-index: 999;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
    transition: transform 0.2s ease-in;

    li {
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }
`;


const SideMenuButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CloseButon = styled(CloseIcon)`
    cursor: pointer;
`;