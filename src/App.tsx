import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
// import TrustedPartners from './components/sections/TrustedPartners';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import FeaturedIn from './components/sections/FeaturedIn';
import FAQSection from './components/sections/FAQSection';
import LatestBlogs from './components/sections/LatestBlogs';
import Testimonials from './components/sections/Testimonials';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        {/* <TrustedPartners /> */}
        <Services />
        <WhyChooseUs />
        <FeaturedIn />
        <FAQSection />
        <LatestBlogs />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;
