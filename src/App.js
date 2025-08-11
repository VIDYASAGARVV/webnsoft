import './App.css';
import AboutSection from './components/AboutSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PriceCards from './components/PriceCards';
import SecHero from './components/SecHero';
import Seo from './components/Seo';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
       <Seo
        title="WebNSoftware — Digital Solutions for Business Growth"
        description="WebNSoftware provides social media management, website & e-commerce development, SEO and digital marketing for businesses in India."
        url="https://www.webnsoftware.com"
        image="https://www.webnsoftware.com/images/og-image.jpg"
      />
      <Navbar/>
      <Hero />
       <SecHero/>
       <PriceCards/>
       <AboutSection/>
       <Testimonials/>
       <CallToAction/>
       <Footer/>
    </div>
  );
}

export default App;
