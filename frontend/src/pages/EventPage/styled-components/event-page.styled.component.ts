import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 340px;
    background-color: #223852;
    padding: 3rem 4rem;
    display: flex;
    justify-content: center;
    font-family: "Poppins", Sans-serif;
`;

export const EventLogo = styled.img`
    width: 312px;
    height: 312px;
    border-radius: 3rem;
`;

export const HeaderTitleContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    justify-content: flex-end;
`;  

export const HeaderTitle = styled.h1`
    color: #f8f8f8;
    font-weight: 800;
`;

export const HeaderDate = styled.h3`
    color: #f8f8f8;
    font-weight: 300;
`;

export const InfoContainer = styled.div`
    width: 100%;
    padding: 1.75rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", Sans-serif;  
`;

export const InfoBody = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const InfoTitle = styled.h2`
    font-weight: 800;
    color: #06232c;
`;

export const SubscribeButton = styled.button`
    width: 50%;
    padding: 1rem 3rem;
    border: 0;
    outline: none;
    color: #f8f8f8;
    font-weight: 700;
    letter-spacing: 0.7rem;
    font-size: 1rem;
    background-color: #2E4B6E;
    border-radius: 9999px;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
        filter: brightness(1.2);
    }
`;