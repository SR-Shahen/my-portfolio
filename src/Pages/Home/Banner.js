import React from 'react';
import shahen from '../../Assets/images/shaheen.jpg'
import facebook from '../../Assets/icons/facebook-brands.svg'
import linkedin from '../../Assets/icons/linkedin-brands.svg'
import github from '../../Assets/icons/github-brands.svg'
import shahenoor from '../../Assets/shahenoor.pdf'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-black">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-72' src={shahen} alt='dev-shaheen' />
                    <div className='lg:pl-10'>
                        <h1 className='text-3xl font-medium text-white my-1'>HI There,</h1>
                        <h1 className="text-4xl font-medium text-white">I'M <span className='text-teal-400'>Md Shahenoor Rahman</span></h1>
                        <p className='text-purple-500 font-semibold text-xl'>I Am Jr. Web Developer</p>
                        <p className="py-2 text-white">An aspiring MERN Stack Developer.. I am a professional web developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, Jquery, React JS, Next JS, Node JS, Express JS, Mongo DB. More than 1+ years of experience working closely with Web Development to outline organizational needs and translate them into extensive lines of code that support objectives. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.</p>
                        <a download={'Md_Shahenoor_Rahman_resume_of_web_developer'} href={shahenoor}><button className="btn btn-primary px-10 my-1">Resume</button></a>

                        <div className='flex my-2 '>
                            <a href='https://www.facebook.com/profile.php?id=100069853458040' target='_blank' rel="noReferrer"><img className='w-8 bg-teal-400 mx-2 rounded-full  ' src={facebook} alt="" /></a>
                            <a href="https://github.com/SR-Shahen" target='_blank' rel='noReferrer'><img className='w-8 bg-teal-400 mx-2 rounded-full ' src={github} alt="" /></a>
                            <a href="https://www.linkedin.com/in/md-shahenoor-rahman-61016a227/" target="_blank" rel='noReferrer'> <img className='w-8 bg-teal-400 mx-2 rounded-full ' src={linkedin} alt="" /></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;