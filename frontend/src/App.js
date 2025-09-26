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
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/services' element = {<Service />} />
        <Route path='/business' element = {<Business />} />
        <Route path='/careers' element = {<Careers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
