import './App.css';
import { Routes , Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
