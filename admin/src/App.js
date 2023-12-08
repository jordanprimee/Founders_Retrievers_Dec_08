import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Paper from "../src/Paper.png";

import { SignIn } from "./pages/SignIn";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";

function App() {
  // Background style
  const BgTexture = {
    backgroundImage: `url(${Paper})`,
    backgroundSize: "cover",
  };

  return (
    <div style={BgTexture}>
        <BrowserRouter>
        {/* <Navbar/> */}
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
