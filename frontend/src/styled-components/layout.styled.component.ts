import styled from 'styled-components';

export const ScreenWrapper = styled.div`
    position: absolute;
    top: 0;
    left : 0;
    width: 100vw;
    height : 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
`;

export const FormPageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(46, 75, 110);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormContentContainer = styled.div`
    background-color: #f8f8f8;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    border-radius: 1.75rem;
    height: 60%;
    width: 50%;
    max-width: 40rem;
`;