import{useState} from 'react';
import { useNavigate } from "react-router-dom";
import useSubmitLogin from '../../hooks/useSubmitLogin';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useUser } from '../../context/UserContext';

function Login(){
    const { login } = useUser();
    const navigate = useNavigate();
    const {isLoading, submit} = useSubmitLogin();
    const [error, setError] = useState(null)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            submit("url", values)
             .then((response) => {
                login(response)
                navigate("/");
                formik.resetForm();
            })
            .catch((error) => {
                setError(error)
            });
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
    });

    return(
        <section className="form">
            <form onSubmit={formik.handleSubmit}>
                <fieldset>
                    <section className="field-email">
                        <label htmlFor='email' className='h3-like'>Email: </label>
                        <input
                            id="email"
                            name='email'
                            type='email'
                            className={`h3-like ${formik.errors.email && formik.touched.email ? 'invalid' : ''}`}
                            {...formik.getFieldProps("email")}
                        />
                    </section>
                    <section className="field-password">
                        <label htmlFor='password' className='h3-like'>Password: </label>
                        <input
                            id="password"
                            name='password'
                            type='password'
                            className={`h3-like ${formik.errors.password && formik.touched.password ? 'invalid' : ''}`}
                            {...formik.getFieldProps("password")}
                        />
                    </section>
                    {error && (
                        <section className='field-error'>
                            <label className='error'>{error}</label>
                        </section>
                    )}
                    <button
                        className='button'
                        disabled={!(formik.isValid) || isLoading}
                        type="submit"
                        aria-label="Submit Login form"
                        >
                        Submit
                    </button>
                </fieldset>
            </form>
        </section>
    )
}
export default Login;