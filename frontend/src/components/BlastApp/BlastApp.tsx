import { Outlet, useNavigate } from "react-router-dom";
import {  Body, Navbar, AppWrapper, BlastLogo } from "./styled-components";
import blastLogo from "../../assets/blast-logo.png";
import { BiPowerOff } from "react-icons/bi";
import { AiFillFilter } from 'react-icons/ai';
import { deleteSession } from '../../redux/state';
import { useDispatch } from "react-redux";
import { PUBLIC_ROUTES } from "../../utilities";
import { Box } from "@mui/material";

const BlastApp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateHome = () => {
        navigate('/');
    }

    const logout = () => {
        dispatch(deleteSession());
        navigate(PUBLIC_ROUTES.LOGIN);
    }

    return (
        <AppWrapper>
            <Navbar>
                <BlastLogo src={blastLogo} onClick={navigateHome}/>
                <Box sx={{ display: 'flex'}}>
                    <AiFillFilter color="white" size={30} onClick={() => {}}/>
                    <Box m={1}></Box>
                    <BiPowerOff color="white" size={30} onClick={logout}/>
                </Box>
            </Navbar>
            <Body>
                <Outlet />
            </Body>
        </AppWrapper>       
    );
}

export default BlastApp;