
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
import Blog from './Pages/Blog';
import Team from './Pages/Team';
import TeamSingle from './Pages/TeamSingle';
import Contact from './Pages/Contact';
import Errorpage from './Pages/Errorpage';
import Login from './Pages/Login';


function App() {

  const token = localStorage.getItem('token')

  return (
    <>

      {
        token === null ? (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        ) : (
          <>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/servicesingle" element={<ServiceSingle />} />
              <Route path="/project" element={<Project />} />
              <Route path="/info" element={<ClientiInfo />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/team" element={<Team />} />
              <Route path="/teamsingle" element={<TeamSingle />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<Errorpage />} />
            </Routes>
          </>
        )
      }

    </>
  );
}

export default App;
