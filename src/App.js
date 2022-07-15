
import './App.css';
import Navebar from './Pages/Shared/Navbar';
import { Routes, Route,  } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import SubHeaders from './Pages/Shared/SubHeaders/SubHeaders';
function App() {
  return (
    <div className="App">
      <SubHeaders></SubHeaders>
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
