import logo from "./logo.svg";
import "./App.css";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { ProfilePage } from "./pages/ProfilePage";

import { FeedPage } from "./pages/FeedPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import Paper from "../src/Paper.png";
import { HomePage } from "./pages/HomePage";
import { FixedFooter } from "./components/FixedFooter";
import { ModalProvider } from "./hooks/useContext/ModalContext";
import { MainCardFound } from "./components/MainCardFound";
import { UseUser, UserProvider } from "./hooks/useContext/UserContext";

import "./hooks/useContext/Config";
import { NotFound } from "./pages/NotFound";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import { useCookies } from "react-cookie";
import { Cookies } from 'react-cookie';
import axios from 'axios';
import Payment from "./components/PaymentTwo/Payment";
import { TestPage } from "./pages/TestPage";

const cookies = new Cookies();

// Set the Authorization header for all requests
axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.get('token')}`;


function App() {
  // Background style
  const BgTexture = {
    backgroundImage: `url(${Paper})`,
    backgroundSize: "cover",
  };

 const { user } = UseUser();


  return (
    <div style={BgTexture }>
      <UserProvider  user={user}>
        <BrowserRouter>
          <ModalProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route
                path="/profilepage"
                element={user ? (<ProfilePage />) : (<SignIn />)}
              />
              <Route
                path="/feedpage"
                element={user ? (<FeedPage />) : (<SignIn />)}
              />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/payment" element={<Payment />} />
              <Route
                path="/found/:id"
                element={user ? (<MainCardFound />) : (<Navigate to="/signin" />)}
              />
              <Route path="*" element={<NotFound />} />
              <Route path="/test" element={<TestPage />} />
            </Routes>
            <FixedFooter />
            <Footer />
          </ModalProvider>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
