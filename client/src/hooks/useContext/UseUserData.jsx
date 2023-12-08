import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useUserData = () => {
  const [userData, setUserData] = useState(null);
  const [cookies] = useCookies(['userToken']);
  const token = cookies.userToken || null;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          axios.defaults.headers.common['authorization'] = `${token}`;
          const response = await axios.get(`http://localhost:3000/profile`);
          console.log('userdata', response.data);
          setUserData(response.data[0]);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);

  return { userData };
};

export default useUserData;
