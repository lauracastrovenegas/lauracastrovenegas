import React from 'react';
import styled from 'styled-components/macro';
import HamburgerMenu from 'react-hamburger-menu';
import { fallDown as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import theme from '../theme';


const Container = styled.div`
    width: 100%;
    @media only screen and (min-width: 768px){
        display: none;
    }

    text-transform: uppercase;
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

    a {
        text-decoration: none;
        color: ${props => props.current ? theme.colors.mainBlue :theme.colors.black};
        font-size: 1rem;
        margin: 0rem auto;
    }
`;

const HamburgerWrapper = styled.div`
    padding: .75rem;
    margin-left: -5rem;
`;

const Name = styled.div`
    color: ${theme.colors.mainBlue};
    font-size: 1.25rem;
    font-weight: 600;

    @media only screen and (max-width: ${theme.sizes.tablet}){
        margin: auto auto;
    }
`

const MobileNav = ({sections}) => {

    const [open, setOpen] = React.useState(false);
    
    function handleClick() {
        setOpen(!open)
    }

    // to fix bug where menu opens where clicking anywhere, style burger
    // but we want to use the other hamburger's icon so make these transparent
    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '0px',
          height: '0px',
          right: '1rem',
          top: '1rem'
        },
        bmBurgerBars: {
          background: '#00000000'
        },
        bmCrossButton: {
          width: '0px',
          height: '0px',
        },
        bmCross: {
          background: '#00000000'
        },
      }

    return (
        <Container>
            <TopBar open={open}>
                <Name>Laura Castro Venegas</Name>
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
            <div>
            {sections.map(section => (
                    <MenuItem current={window.location.pathname === section.link} onClick={() => handleClick()}>
                        <Link to={section.link}>{section.title}</Link>
                    </MenuItem>
                ))}    
            </div>}

            <Menu isOpen={open} width={'100vw'} styles={styles}>
                
            </Menu>
        </Container>
    )
};

export default MobileNav;