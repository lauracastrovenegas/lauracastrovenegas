import styled from "styled-components"
import theme from "../theme"
import React, {useState, useEffect} from 'react';

const Wrapper = styled.div`
    width: 100vw;
    height: 0;
    position: sticky; 
    top: 0;
    z-index: 10;
    display: flex;
    overflow: hidden;

    &.scrolled{
        height: fit-content;
        background-color: #8399be;
        -webkit-transition: background-color 500ms linear;
        -ms-transition: background-color 500ms linear;
        transition: background-color 500ms linear;
    }
`

const Content = styled.div`
    margin: 1rem auto;
    color: white;
    height: 0;

    &.scrolled{
        height: fit-content;
        -webkit-transition: background-color 500ms linear;
        -ms-transition: background-color 500ms linear;
        transition: background-color 500ms linear;
    }
`


const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    const threshold = 250;

    function handleScroll() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", handleScroll);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <Wrapper className={(scrollY > threshold) ? "scrolled" : ""}>
            <Content className={(scrollY > threshold) ? "scrolled" : ""}>
                Laura Castro Venegas | Projects Portfolio
            </Content>
        </Wrapper>
    )   
}

export default Navbar;