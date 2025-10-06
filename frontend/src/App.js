import './App.css';
import { Routes , Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './components/FooterSection/FooterSection.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Service from './pages/Service/Service.jsx';
import Business from './pages/Business/Business.jsx';
import Careers from './pages/Careers/Careers.jsx';
function App() {
  const url = "http://localhost:5000";
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home url={url} />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/services' element = {<Service url={url} />} />
        <Route path='/business' element = {<Business url={url} />} />
        <Route path='/careers' element = {<Careers url = {url} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
