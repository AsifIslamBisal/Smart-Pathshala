import App from '../App.jsx';
import HeroSection from './HeroSection/HeroSection.jsx';
import KeyFeature from './KeyFeature.jsx';
import TeamMembers from './TeamMembers.jsx';
import Services from './Services.Jsx';


const Home = () => {
    return (
        <div className=''>
            <HeroSection/>
            <App/>
            <KeyFeature/>
            <TeamMembers/>
            <Services/>
        </div>
    );
};

export default Home;