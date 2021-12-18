import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-indigo-700 shadow-lg">
            <div className="container mx-auto">
                <div className="sm:flex justify-around">
                    <a href="home" className="text-white text-3xl font-bold p-3">
                        <img className='w-3/12' src="https://i.ibb.co/C0DY5Xm/logo-2.png" alt="" />
                    </a>

                    <ul className="text-gray-400 sm:self-center text-xl border-t sm:border-none">
                        <li className="sm:inline-block">
                            <a href="home" className="p-3 hover:text-white">Home</a>
                        </li>
                        <li className="sm:inline-block">
                            <a href="home" className="p-3 hover:text-white">Services</a>
                        </li>
                        <li className="sm:inline-block">
                            <a href="home" className="p-3 hover:text-white">About</a>
                        </li>
                        <li className="sm:inline-block">
                            <a href="home" className="p-3 hover:text-white">Contact</a>
                        </li>

                        <Link to='/register'>Register</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;