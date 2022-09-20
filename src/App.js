import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

import topBackground from "./resources/background.jpg"

import Home from './pages/home';
import Project from './pages/project';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#a8d1e5"}}>
      <div style={{backgroundColor:"#edb3af", height:"2vh"}}/>
      <Nav
      activeKey="/"
      // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item className="nav-font">
        <Nav.Link style={{color:"#605448", fontFamily:"DMSerif", fontWeight: "300", fontSize: "120%"}} href="/">HOME</Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-font">
        <Nav.Link style={{color:"#605448", fontFamily:"DMSerif", fontWeight: "300", fontSize: "120%"}} href="/project">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-font">
        <Nav.Link style={{color:"#605448", fontFamily:"DMSerif", fontWeight: "300", fontSize: "120%"}} href="/exp">Work</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item className="nav-font">
        <Nav.Link style={{color:"#605448", fontFamily:"DMSerif", fontWeight: "300", fontSize: "120%"}} eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item> */}
    </Nav>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
