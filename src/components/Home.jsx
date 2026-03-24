import React from 'react';
import App from '../App.jsx';
import ScrollToTop from '../ScrollToTop';
import ScrollToTop2 from './ScrollTopButton.jsx';
import HeroSection from './HeroSection/HeroSection.jsx';
import KeyFeature from './KeyFeature.jsx';
import TeamPage from './TeamMembers.jsx';
import TeamMembers from './TeamMembers.jsx';


const Home = () => {
    return (
        <div className=''>
            <HeroSection/>
            <App/>
            <KeyFeature/>
            <TeamMembers/>
        </div>
    );
};

export default Home;