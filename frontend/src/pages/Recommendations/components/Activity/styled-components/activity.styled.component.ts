import styled from "styled-components";

export const ActivityContainer = styled.div`
    margin-top: 30px;
    min-width: 8.75rem;
    width: calc(50vw - 2.5rem);
    max-width: 11.25rem;
    min-height: 17rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &:hover{
        transform: scale(1.06);
        transition-timing-function: ease;
        transition-duration: 300ms;
    }
`;

export const ActivityImage = styled.img`
    flex-grow: 1;
    max-width: 100%;
    aspect-ratio: 1;
    border-radius: 0.7rem;
`;

export const ActivityTitle = styled.h3`
    font-weight: 600;
    height: 2.8em;
    width: 100%;
    
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
    overflow: hidden;
    text-align: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const ActivityPrice = styled.span`
    text-align: start;
    font-size: 0.75rem;
`;