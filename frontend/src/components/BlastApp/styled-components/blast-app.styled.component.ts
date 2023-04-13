import styled from "styled-components";

export const AppWrapper = styled.div`
    display: block;
`;

export const Navbar = styled.nav`
    box-sizing: border-box;
    width: 100%;
    height: 3.5rem;
    background-color: #2E4B6E;
    position: fixed;
    top: 0;
    z-index: 1000;
    box-shadow: 0 0.25rem 0.25rem #06232c3d;
    display: flex;
    padding: 0 1.75rem;
    align-items: center;
    justify-content: space-between;
`;

export const BlastLogo = styled.img`
    max-height: 70%;
    cursor: pointer;
`;

export const Body = styled.div`
    width: 100%;
    position: relative;
    min-height: 100vh;
    padding-top: 3.5rem;
    background-color: #f5fffe;
`;