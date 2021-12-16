import type { NextPage } from "next";
import { useState, useEffect } from "react";
import data from "../mock_data.json";

const LoginForm: NextPage = () => {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e: KeyboardEvent) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e: KeyboardEvent) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    });

    const validate = (values: any) => {
        const errors = {};

        if (!values.email) {
            errors.email = "Email is required";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        return errors;
    };
    return (
        <>
            <div className='container-fluid  bg'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-sm-6 col-md-3'>
                        <form
                            className='form-container'
                            onSubmit={handleSubmit}
                        >
                            <div className='mb-3'>
                                <label
                                    htmlFor='emailLabel'
                                    className='form-label'
                                >
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    className='form-control'
                                    id='emailLabel'
                                    aria-describedby='emailHelp'
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.email}</p>
                            <div className='mb-3'>
                                <label
                                    htmlFor='passwordLabel'
                                    className='form-label'
                                >
                                    Password
                                </label>
                                <input
                                    type='password'
                                    name='password'
                                    className='form-control'
                                    id='passwordLabel'
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <p>{formErrors.password}</p>

                            <button
                                type='submit'
                                className='btn btn-block btn-primary'
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
function setFormValues(arg0: { name: any; email: string; password: string }) {
    throw new Error("Function not implemented.");
}
