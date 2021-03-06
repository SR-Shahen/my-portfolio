import React from 'react';
import { Link } from 'react-router-dom';
import shahenoor from '../../Assets/shahenoor.pdf'

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap lg:bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">

                    <span className="font-semibold text-xl lg:hover:text-purple-900 tracking-tight">Dev Shaheen</span>
                </div>
                <div className="lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded lg:text-teal-200 border-black hover:text-teal-400 hover:border-teal-400">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex text-center lg:items-center lg:w-auto">
                    <div className="text-xl font-medium lg:flex-grow">
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 lg:text-white lg:hover:text-purple-900 hover:text-teal-400 mr-4">
                            HOME
                        </Link>
                        <Link to="#about" className="block mt-4 lg:inline-block lg:mt-0 lg:text-white lg:hover:text-purple-900 hover:text-teal-400  mr-4">
                            ABOUT
                        </Link>
                        <Link to="#contact" className="block mt-4 lg:inline-block lg:mt-0 lg:text-white lg:hover:text-purple-900 hover:text-teal-400  mr-4">
                            CONTACT
                        </Link>
                        <Link to="3#portfolio" className="block mt-4 lg:inline-block lg:mt-0 lg:text-white lg:hover:text-purple-900 hover:text-teal-400  ">
                            PORTFOLIO
                        </Link>
                    </div>
                    <div>
                        <a download={'Md_Shahenoor_Rahman_resume_of_web_developer'} href={shahenoor} className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:bg-black lg:text-white lg:border-white hover:border-transparent hover:text-teal-500 lg:hover:bg-white mt-4 lg:mt-0">Resume</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;