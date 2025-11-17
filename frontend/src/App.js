import './App.css';
import { Routes , Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './components/FooterSection/FooterSection.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Service from './pages/Service/Service.jsx';
import Business from './pages/Business/Business.jsx';
import Careers from './pages/Careers/Careers.jsx';
import Apply from './pages/Apply/Apply.jsx';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs.jsx';
import AboutUs from './pages/Service/AboutUs/AboutUs.jsx';
function App() {
  const url = "https://adamant-backend.onrender.com";
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home url={url} />} />
        {/* <Route path='/contact' element = {<Contact />} /> */}
        <Route path='/aboutus' element = {<AboutUs />} />
        <Route path='/services' element = {<Service url={url} />} />
        <Route path='/business' element = {<Business url={url} />} />
        <Route path='/careers' element = {<Careers url = {url} />} />
        <Route path='/careers/apply/:id' element = {<Apply url={url} />} />
      </Routes>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
