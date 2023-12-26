import { createContext, useState, useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
// import { Location, Navigate, useNavigate } from "react-router-dom";


const UserContext = createContext();

export const UserProvider = ({ children }) => {



  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

  useEffect(() => {
    
    // Check for stored token in cookies on page load
    const storedToken = cookies.userToken;
    if (storedToken) {
      setUser(storedToken);
    }
  }, [cookies]);

  const login = (token) => {
    // Set user data in context
    setUser(token);
    // Set token in cookies
    setCookie('userToken', token); 
  };

  // const logout = async () => {
  //   // Clear user data from context
  //   setUser(null);
  //   // Clear token from cookies
  //   removeCookie('userToken');
  //   // log out on the server using Axios
  //   try {
  //     // await axios.post('/api/logout');
  //   } catch (error) {
  //     console.error('Error during logout API call:', error);
  //   }
  // };


  // const location = useLocation();
  // const navigate = useNavigate();

  const logout = async () => {
  
    try {
    setUser(null);
    removeCookie('userToken');
    // if (location.pathname === "/") {
      // window.location.reload();
    // } else {
    //   navigate("/");
    // }
    } catch (error) {
      console.error('Error during logout API call:', error);
    }
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => {
  return useContext(UserContext);
};


