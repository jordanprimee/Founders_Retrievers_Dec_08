import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Paper from "../src/Paper.png";

import { SignIn } from "./pages/SignIn";
import { Navbar } from "./components/Navbar";
import { Dashboard } from "./pages/Dashboard";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { UseUser, UserProvider } from "./hooks/UserContext";
import { SideBar } from "./components/SideBar";

function App() {
  // Background style
  const BgTexture = {
    backgroundImage: `url(${Paper})`,
    backgroundSize: "cover",
  };
  const { user } = UseUser();

  return (
    <div style={BgTexture}>
      <UserProvider user={user}>
        <BrowserRouter>
          {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <SignIn />} />
            <Route path="/sidebar" element={user ? <UserProvider /> : <SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
