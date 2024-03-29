import React from 'react';
import styled from 'styled-components/macro';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';
import theme from '../theme';
import SocialMediaLinks from './SocialMediaLinks';

const Container = styled.div`
    width: 100%;
    @media only screen and (min-width: 768px){
        display: none;
    }

    a {

        text-decoration: none;
        color: ${theme.colors.mainBlue};

        @media only screen and (max-width: ${theme.sizes.tablet}){
            margin: auto auto;
        }
    }
`;

const Menu = styled.div`
    background-color: white;
    padding: 0rem 2rem;
`;

const TopBar = styled.div`
    display: flex;
    justify-content: ${props => props.open ? 'flex-end' : 'space-between'};
    background: ${theme.colors.white};
    height: 3rem; 
`;

const MenuItem = styled.div`
    display: flex;
    text-align: center;
    padding: 0.5rem 1rem;
    background: white;
    border: 0.5rem solid ${theme.colors.white};
    font-weight: ${props => props.current ? '700' : '500'};
    text-transform: uppercase;

    a {
        text-decoration: none;
        color: ${props => props.current ? theme.colors.mainBlue :theme.colors.black};
        font-size: 1rem;
        margin: 0rem auto;
    }

    :hover {
        color: ${theme.colors.darkBlue};
        font-weight: 700;
        transform: scale(1.025);
   }
`;

const HamburgerWrapper = styled.div`
    padding: .75rem;
    margin-left: -3rem;
`;

const Name = styled.div`
    color: ${theme.colors.mainBlue};
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
`

const MobileNav = ({sections}) => {

    const [open, setOpen] = React.useState(false);
    
    function handleClick() {
        setOpen(!open)
    }

    // to fix bug where menu opens where clicking anywhere, style burger
    // but we want to use the other hamburger's icon so make these transparent

    return (
        <Container>
            <TopBar open={open}>
                <a href="/">
                    <Name>Laura Castro Venegas</Name>
                </a>
                <HamburgerWrapper>
                    <HamburgerMenu
                        isOpen={open}
                        menuClicked={() => handleClick()}
                        width={30}
                        height={20}
                        strokeWidth={5}
                        rotate={0}
                        color={theme.colors.mainBlue}
                        borderRadius={0}
                        animationDuration={0.5}
                        zIndex={100}
                        className="over"
                    />
                </HamburgerWrapper>
            </TopBar>
            {open && 
            <Menu>
                {sections.map(section => (
                    <MenuItem current={window.location.pathname === section.link} onClick={() => handleClick()}>
                        <Link to={section.link}>{section.title}</Link>
                    </MenuItem>
                ))}    
                <SocialMediaLinks/>
            </Menu>}
        </Container>
    )
};

export default MobileNav;