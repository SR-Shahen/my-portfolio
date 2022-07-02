import React from 'react';
import shaheen from '../../Assets/images/shaheen.jpg'
import facebook from '../../Assets/icons/facebook-brands.svg'
import linkedin from '../../Assets/icons/linkedin-brands.svg'
import github from '../../Assets/icons/github-brands.svg'

const Banner = () => {
    return (
        <div>
            <div class="hero bg-black">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='w-72' src={shaheen} alt='dev-shaheen' />
                    <div className='lg:pl-10'>
                        <h1 className='text-3xl font-medium text-white my-1'>HI There,</h1>
                        <h1 class="text-4xl font-medium text-white">I'M <span className='text-teal-400'>Md Shahenoor Rahman</span></h1>
                        <p className='text-purple-500 font-semibold text-xl'>I Am Jr. Web Developer</p>
                        <p class="py-2 text-white">An aspiring MERN Stack Developer.I lost myself when I dive into the codes. I am a professional web designer and developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, Jquery, React JS, Next JS, Node JS, Express JS, Mongo DB.Resourceful Web Developer lends hands-on approach to customizing web presence strategy. More than 1+ years of experience working closely with Web Development to outline organizational needs and translate them into extensive lines of code that support objectives. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.</p>

                        <button class="btn btn-primary">Get Started</button>
                        <div className='flex '>
                            <a href='https://www.facebook.com/profile.php?id=100076041474855' target='_blank' rel="noReferrer"><img className='w-8 bg-teal-400 mx-2 rounded-full  ' src={facebook} alt="" /></a>
                            <a href="https://github.com/Al-aminhossain1" target='_blank' rel='noReferrer'><img className='w-8 bg-teal-400 mx-2 rounded-full ' src={github} alt="" /></a>
                            <a href="https://www.linkedin.com/in/md-al-amin-hossain-1234b9241/" target="_blank" rel='noReferrer'> <img className='w-8 bg-teal-400 mx-2 rounded-full ' src={linkedin} alt="" /></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;