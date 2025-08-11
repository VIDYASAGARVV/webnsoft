import './App.css';
import AboutSection from './components/AboutSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PriceCards from './components/PriceCards';
import SecHero from './components/SecHero';
// import Seo from './components/Seo';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Hero />
       <SecHero/>
       <PriceCards/>
       <AboutSection/>
       <Testimonials/>
       <CallToAction/>
       <Footer/>
       {/* ,./mmm */}
    </div>
  );
}

export default App;
