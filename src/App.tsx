import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
// import TrustedPartners from './components/home/TrustedPartners';
import Services from './components/home/Services';
import WhyChooseUs from './components/home/WhyChooseUs';
import FeaturedIn from './components/home/FeaturedIn';
import FAQSection from './components/home/FAQSection';
import LatestBlogs from './components/home/LatestBlogs';
import Testimonials from './components/home/Testimonials';
import CompanyRegistration from './pages/CompanyRegistration';
import ServicePage from './pages/ServicePage';
import ContactUs from './pages/ContactUs';

function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/company-registration" element={<CompanyRegistration />} />
        <Route path="/:slug" element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
