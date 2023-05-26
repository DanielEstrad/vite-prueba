import { Routes, Route } from "react-router-dom";
import { Footer } from "./Layouts/Footer";
import { Navbar } from "./Layouts/Navbar";
import Home from "./Pages/Home";
import Perfil from "./Pages/Perfil";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Navbar>
        <Footer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </Footer>
      </Navbar> */}
    </>
  );
}

export default App;
