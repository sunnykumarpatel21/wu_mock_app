import { NextPage } from "next";
import Image from "next/image";
import { Navbar } from "react-bootstrap";

const Header: NextPage = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <a className='navbar-brand' href='#'>
                        <Image
                            src='/wuimg.jpg'
                            alt='WesternUnion / WU'
                            width={200}
                            height={25}
                        />
                    </a>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a
                                    className='nav-link active'
                                    aria-current='page'
                                    href='/'
                                >
                                    Home
                                </a>
                            </li>
                        </ul>
                        <form className='d-flex'>
                            <input
                                className='form-control me-2'
                                type='search'
                                placeholder='Search'
                                aria-label='Search'
                            />
                            <button
                                className='btn btn-outline-success'
                                type='submit'
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
