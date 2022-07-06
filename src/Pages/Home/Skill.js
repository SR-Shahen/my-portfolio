import React from 'react';
import html from '../../Assets/skills/html.png'
import css from '../../Assets/skills/css.png'
import bootstrap from '../../Assets/skills/bootstrap.png'
import tailwind from '../../Assets/skills/tailwind.png'
import javascript from '../../Assets/skills/javascript.png'
import react from '../../Assets/skills/react.png'
import firebase from '../../Assets/skills/firebase.png'
import github from '../../Assets/skills/github.png'
import express from '../../Assets/skills/express.png'
import node from '../../Assets/skills/node.png'
import mongodb from '../../Assets/skills/mongodb.png'

const Skill = () => {
    const skillItems = [
        {
            img: html,
            name: "html"
        },
        {
            img: css,
            name: "css"
        },
        {
            img: bootstrap,
            name: "bootstrap"
        },
        {
            img: tailwind,
            name: "tailwind"
        },
        {
            img: javascript,
            name: 'javascript'
        },
        {
            img: react,
            name: 'react'
        },
        {
            img: firebase,
            name: "firebase"
        },
        {
            img: github,
            name: "github"
        },
        {
            img: express,
            name: "Express"
        },
        {
            img: node,
            name: "Node"
        },
        {
            img: mongodb,
            name: "Mongodb"
        }
    ]
    return (
        <div className='bg-black'>
            <h1 className='text-center bg-black font-bold text-4xl text-white mb-10' >My Skills</h1>
            <div className='grid grid-cols-2  lg:mx-32 lg:grid-cols-6 pl-16 gap-6'>
                {
                    skillItems.map((skill, index) => <div className="card card-compact relative hover:transition-transform w-20 lg:w-20  bg-white lg:bg-black hover:bg-teal-400 shadow-xl">
                        <figure><img src={skill.img} alt="Shoes" /></figure>
                        <div className="text-center ">
                            <h2 className="text center font-medium text-lg absolute top-18">{skill.name}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Skill;