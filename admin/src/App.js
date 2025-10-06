import './App.css';
import {Routes , Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';
import AddService from './pages/AddService/AddService';
import AddInudstry from './pages/AddIndustry/AddIndustry';
import ListIndustries from './pages/ListIndustries/ListIndustries';
import ListService from './pages/ListServices/ListServices';
import EditService from './pages/EditService/EditService';
import EditIndustry from './pages/EditIndustry/EditIndustry';
import Applicants from './pages/Applicants/Applicants';

function App() {
  const url = "http://localhost:5000";

  return (
    <div style={{position:'fixed' , width:'100vw', height:'100vh'}}>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add-service' element = {<AddService url = {url} />} />
          <Route path='/list-services' element = {<ListService url = {url} />} />
          <Route path='/edit-service/:id' element = {<EditService url = {url} />} />
          <Route path='/add-industry' element = {<AddInudstry url = {url} />} />
          <Route path='/list-industries' element = {<ListIndustries url = {url} />} />
          <Route path='/edit-industry/:id' element = {<EditIndustry url = {url} />} />
          <Route path='/cvs' element = {<Applicants url = {url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
