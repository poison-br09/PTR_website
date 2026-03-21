import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
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
import CompanyRegistration from './pages/CompanyRegistration';
import RegistrationPage from './pages/RegistrationPage';

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
        <Route path="/company-registration" element={<CompanyRegistration />} />
        <Route path="/:slug" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
