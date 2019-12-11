import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";


import './navbar.css';

export const NavBar = (props) => {
  const [topWorks, setTopWorks] = useState([]);
  const fetchData = useCallback( async() => {
    let topWorksData = await axios.get('/api/v1/works/top')
      .then(response => response.data)
      .catch(error => console.log(error));

      setTopWorks(topWorksData);
  },[]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    
    <ul className="left-navigation-bar">
      <li>Top</li>
      <li>Works</li>
      { 
        topWorks.map((work, index) =>  {
          return(
            <li className="works-child" key={index}>Work{index+1}</li>
          );
        })
      }
      <li>All Works</li>
      <li>Profile</li>
      <li>Contact</li>
    </ul>
  );
}
