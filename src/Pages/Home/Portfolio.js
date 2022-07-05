import React from 'react';
import doctorsPortal from '../../Assets/images/doctors portal.png'
import comfortFurniture from '../../Assets/images/comfort furniture.png'
import cyberDoctor from '../../Assets/images/cyber doctor.png'
import productAnalysis from '../../Assets/images/product analysis.png'

const Portfolio = () => {
    return (
        <div className='mt-0 bg-black' id='portfolio'>
            {/* <p>l</p> */}
            <div className=''>
                <h1 className='text-center text-4xl font-bold text-white pt-16'>MY PORTFOLIO</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 lg:pl-40 pl-0'>
                <div className="card lg:w-96 w-86 bg-black hover:bg-teal-300 text-white hover:text-black shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-medium">Dreamy Electric!</h2>
                        <img src={doctorsPortal} alt="" />
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="flex justify-evenly">
                            <a href='https://github.com/SR-Shahen/doctors-portal-client' target='_blank' rel='noReferrer'><button className="btn btn-sm btn-primary">Github Repo</button> </a>
                            <a href='https://doctors-portal-89b22.web.app/' target='_blank' rel='noReferrer'><button className="btn btn-sm btn-primary">Preview</button> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;