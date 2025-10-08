import './App.css';
import {Routes , Route, Navigate} from 'react-router-dom'
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
import Login from './pages/Login/Login';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { useContext } from 'react';

function AppRoutes() {
  const url = "http://localhost:5000";

  return (
    <Routes>
      <Route path='/add-service' element = {<AddService url = {url} />} />
      <Route path='/list-services' element = {<ListService url = {url} />} />
      <Route path='/edit-service/:id' element = {<EditService url = {url} />} />
      <Route path='/add-industry' element = {<AddInudstry url = {url} />} />
      <Route path='/list-industries' element = {<ListIndustries url = {url} />} />
      <Route path='/edit-industry/:id' element = {<EditIndustry url = {url} />} />
      <Route path='/cvs' element = {<Applicants url = {url} />} />
      <Route path="*" element={<Navigate to="/list-services" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <AppContent />
    </AuthProvider>
  )
}

function AppContent() {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return (
      <div style={{position:'fixed' , width:'100vw', height:'100vh'}}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    );
  }

  return (
    <div style={{position:'fixed' , width:'100vw', height:'100vh'}}>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
