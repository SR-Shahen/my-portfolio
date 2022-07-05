import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Portfolio from './Portfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>

        </div>
    );
};

export default Home;