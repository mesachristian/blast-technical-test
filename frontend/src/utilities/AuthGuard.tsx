import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { Navigate, Outlet } from "react-router-dom";
import { PUBLIC_ROUTES } from "./routes";

const AuthGuard = () => {
    const token = useSelector( (state: RootState) => state.token );
    return token != '' ? <Outlet/> : <Navigate replace to={PUBLIC_ROUTES.LOGIN}/>
}

export default AuthGuard;