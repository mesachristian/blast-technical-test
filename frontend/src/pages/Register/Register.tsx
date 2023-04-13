import { useNavigate } from "react-router-dom";
import { FormContentContainer, FormPageWrapper } from "../../styled-components";
import {
    FormContainer,
    FormLogoContainer,
    LogoTitle,
    FieldContainer,
    Submit,
    Error
} from "./styled-components";
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { PUBLIC_ROUTES } from "../../utilities";

interface FormValues{
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

const Register = () => {
    const navigate = useNavigate();
    //const dispatch = useDispatch();

    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            passwordConfirmation:''
        }
    });

    const navigateLogin = () => {
        navigate(PUBLIC_ROUTES.LOGIN);
    }

    const onSubmit = async (data: FormValues) => {
        console.log(data);
    };

    const textFieldStyle = { 
        width : '70%',
        borderColor : "white !important" 
    };

    return (
        <FormPageWrapper>
            <FormContentContainer>
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                    <FormLogoContainer>
                        <LogoTitle>¡Crea una cuenta!</LogoTitle>
                    </FormLogoContainer>

                    <FieldContainer>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) =>
                                <TextField {...field} id="register-name" label="Nombre" variant="outlined" color="primary" sx={textFieldStyle} type="text" />
                            }
                        />
                        {errors.email?.type === 'required' && <Error role="alert">Name is required</Error>}
                        {errors.email?.type != 'required' && <Error role="alert">{errors.name?.message}</Error>}
                    </FieldContainer>

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
                                <TextField {...field} id="register-email" label="Email" variant="outlined" color="primary" sx={textFieldStyle} type="email" />
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
                                <TextField {...field} id="register-password" label="Password" variant="outlined" color="primary" sx={{ width: '70%' }} type="password" />
                            }
                        />
                        {errors.password?.type === 'required' && <Error role="alert">Password is required</Error>}
                        {errors.password?.type === 'minLength' && <Error role="alert">Password needs 8 characters min</Error>}

                    </FieldContainer>

                    <FieldContainer>
                        <Controller
                            name="passwordConfirmation"
                            control={control}
                            rules={{ validate: (value, formValues) => value === formValues.password }}
                            render={({ field }) =>
                                <TextField {...field} id="register=passwordConfirmation" label="Password Confirmation" variant="outlined" color="primary" sx={{ width: '70%' }} type="password" />
                            }
                        />
                        {errors.passwordConfirmation?.type === 'validate' && <Error role="alert">Passwords dont match</Error>}
                    </FieldContainer>

                    <FieldContainer>
                        <Submit type="submit">Registarme</Submit>
                    </FieldContainer>

                    <FieldContainer>
                        <Submit onClick={navigateLogin}>Ya tengo cuenta</Submit>
                    </FieldContainer>
                </FormContainer>
            </FormContentContainer>
        </FormPageWrapper>
    );
}

export default Register; 