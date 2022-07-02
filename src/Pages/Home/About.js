import React from 'react';

const About = () => {
    return (
        <div className='flex justify-center bg-black text-white p-3' id='about'>
            <div>
                <h1 className='text-center text-4xl py-5 font-medium text-white'>About Me</h1>
                <h1 className='text-xl lg:text-2xl font-medium'>Name: <span className='text-teal-300  '>Md Shahenoor Rahman</span></h1>
                <p className='text-lg lg:text-xl'>Qualification: <span className='text-teal-300 '>Bsc in EEE (Running)</span></p>
                <p className='text-lg lg:text-xl'>Post: <span className='text-teal-300 '>Jr. Web Developer</span></p>
                <p className='text-lg lg:text-xl'>Language: <span className='text-teal-300 '>Bangla and English</span></p>
                <p className='text-lg lg:text-xl'>Email: <span className='text-teal-300'>S.r.shahenda@gmail.com</span></p>
                <p className='text-lg lg:text-xl'>Phone: <span className='text-teal-300 '>01744558609</span></p>
            </div>

        </div>
    );
};

export default About;