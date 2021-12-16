import type { NextPage } from "next";
import styles from "../styles/login-form.module.css";

const LoginForm: NextPage = () => {
    return (
        <>
            <div className='container-fluid bg'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-sm-6 col-md-3'>
                        <form className='form-container'>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleInputEmail1'
                                    className='form-label'
                                >
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='exampleInputEmail1'
                                    aria-describedby='emailHelp'
                                />
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='exampleInputPassword1'
                                    className='form-label'
                                >
                                    Password
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='exampleInputPassword1'
                                />
                            </div>
                            <div className='mb-3 form-check'>
                                <input
                                    type='checkbox'
                                    className='form-check-input'
                                    id='exampleCheck1'
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='exampleCheck1'
                                >
                                    Check me out
                                </label>
                            </div>
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
