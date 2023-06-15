
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import About from './Pages/About';
import Services from './Pages/Services';
import ServiceSingle from './Pages/ServiceSingle';
import Project from './Pages/Project';
import ClientiInfo from './Pages/ClientiInfo';


function App() {
  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/servicesingle' element={<ServiceSingle />} />
          <Route path='/project' element={<Project />} />
          <Route path='/info' element={<ClientiInfo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
