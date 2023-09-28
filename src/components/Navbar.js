import styled from "styled-components/macro"
import theme from "../theme"
import React from 'react';
import MobileNav from "./MobileNav";
import SocialMediaLinks from "./SocialMediaLinks";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: white;

    a {
        text-decoration: none;
        color: black;
        height: fit-content;
    }

    @media only screen and (max-width: ${theme.sizes.tablet}){
        padding: 1rem 1rem;
    }

    @media only screen and (max-width: ${theme.sizes.mobile}){
        display: none;
    }
`

const Content = styled.div`
    margin: 1rem auto;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: ${theme.sizes.tablet}){
        flex-direction: row;
        margin: auto 1rem;
        height: fit-content;
        width: 100%;
    }
`

const Name = styled.div`
    color: ${theme.colors.darkBlue};
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 5rem;

    text-transform: uppercase;

    @media only screen and (max-width: ${theme.sizes.tablet}){
       margin: 0;
    }
`

const Links = styled.div`
   margin: 2rem 0rem auto 0rem;

    @media only screen and (max-width: ${theme.sizes.tablet}){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: auto 0rem auto auto;
    }
`

const Link = styled.div`
   margin: 1rem 0rem;
   font-weight: ${props => props.current ? '700' : '500'};
   font-size:  1rem;
   text-transform: uppercase;
   color: ${props => props.current ? theme.colors.darkBlue :theme.colors.black};
   transition: transform .2s;

   :hover {
        color: ${theme.colors.darkBlue};
        font-weight: 700;
        transform: scale(1.025);
   }

    @media only screen and (max-width: ${theme.sizes.tablet}){
        margin: 0rem 1rem;
    }
`

const MediaLinks = styled.div`

@media only screen and (max-width: ${theme.sizes.tablet}){
    display: none;
}

`

const navlinks = [
    {
        title: "About Me",
        link: "/"
    },
    {
        title: "Projects",
        link: "/projects"
    },
    {
        title: "Resume",
        link: "/resume"
    }
]

const Navbar = () => {
    return (
        <>
        <MobileNav sections={navlinks}/>
        <Wrapper>
            <Content>
                <a href="/">
                    <Name>Laura Castro Venegas</Name>
                </a>
                <Links>
                    {navlinks.map((navitem) => (
                        <a href={navitem.link}>
                            <Link current={window.location.pathname === navitem.link}>{navitem.title}</Link>
                        </a>
                    ))}
                </Links>
                <MediaLinks>
                    <SocialMediaLinks/>
                </MediaLinks>
            </Content>
        </Wrapper>
        </>
    )   
}

export default Navbar;