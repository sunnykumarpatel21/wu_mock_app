import { NextPage } from "next";
import Link from "next/link";

const SignUp: NextPage = () => {
    return (
        <div className='container-fluid bg'>
            <div className='row justify-content-center'>
                <div className='col-12 col-sm-6 col-md-3'>
                    <form className='form-container' action=''>
                        <div className='mb-3 '>
                            <label htmlFor='firstname'> First Name </label>
                            <input
                                type='text'
                                name='fname'
                                id='firstname'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='lastname'> Last Name </label>
                            <input
                                type='text'
                                name='lname'
                                id='lastname'
                                className='form-control'
                            />
                        </div>
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
                            <label htmlFor='password'> Password </label>
                            <input
                                type='text'
                                name='lname'
                                id='password'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='confirmpassword'>
                                Confirm Password
                            </label>
                            <input
                                type='text'
                                name='lname'
                                id='confirmpassword'
                                className='form-control'
                            />
                        </div>
                        <div className='mb-3'>
                            <label>
                                {" "}
                                Already Sign In?{" "}
                                <Link href='../components/Login-form'>
                                    <a>Sign In</a>
                                </Link>
                            </label>
                        </div>
                        <div className='mb-3'>
                            <button
                                type='submit'
                                className='btn btn-block btn-primary'
                            >
                                Sign Up Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
