import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
// STYLES
import { FormContentContainer, FormPageWrapper } from "../../styled-components";
import {
    Form,
    FormLogoContainer, 
    LogoTitle,
    FieldContainer,
    Submit,
    Error,
} from './styled-components';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../../utilities";
import { login } from "../../services";
import { saveSession } from "../../redux/state";

interface FormValues {
    email: string;
    password: string;
}

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = async (data: FormValues) => {
        const token = await login(data.email, data.password);
        if(token != ""){
            dispatch(saveSession({ email: data.email, token: token }));
            navigate(PRIVATE_ROUTES.HOME);
        }
    };

    const navigateRegister = () => {
        navigate(PUBLIC_ROUTES.REGISTER);
    }

    const textFieldStyle = {
        width: '70%',
        borderColor: "white !important"
    };

    return (
        <FormPageWrapper>
            <FormContentContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormLogoContainer>
                        <LogoTitle>¡Bienvenido de nuevo!</LogoTitle>
                    </FormLogoContainer>

                    <FieldContainer>
                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                required: true,
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format"
                                }
                            }}
                            render={({ field }) =>
                                <TextField {...field} id="login-email" label="Email" variant="outlined" color="primary" sx={textFieldStyle} type="email" />
                            }
                        />
                        {errors.email?.type === 'required' && <Error role="alert">Email is required</Error>}
                        {errors.email?.type != 'required' && <Error role="alert">{errors.email?.message}</Error>}
                    </FieldContainer>

                    <FieldContainer>
                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 8,

                            }}
                            render={({ field }) =>
                                <TextField {...field} id="login-password" label="Password" variant="outlined" color="primary" sx={{ width: '70%' }} type="password" />
                            }
                        />
                        {errors.password?.type === 'required' && <Error role="alert">Password is required</Error>}
                        {errors.password?.type === 'minLength' && <Error role="alert">Password needs 8 characters min</Error>}

                    </FieldContainer>

                    <FieldContainer>
                        <Submit type="submit">Iniciar Sesion</Submit>
                    </FieldContainer>

                    <FieldContainer>
                        <Submit onClick={navigateRegister}>Crear una cuenta</Submit>
                    </FieldContainer>
                </Form>
            </FormContentContainer>
        </FormPageWrapper>
    );
}

export default Login;