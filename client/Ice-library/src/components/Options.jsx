import React, {useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Options() {
    const location = useLocation();
    console.log(location.pathname)
    useEffect(() => {
      const navLinks = document.querySelectorAll(".nav-link");
  
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
          link.classList.add("active");
        });
      });
  
      // Set "New arrivals" link as active by default
      document.querySelector(".nav-link").classList.add("active");
    }, []);


  return (
    <div className="option my-2" id="Options">
     <div className="flex-op">
     <ul>
     <li className="menu_list">
     <Link to="/" className="nav-link">New Arrivals</Link>
     </li>
     <li className="menu_list">
       <Link to="/programming" className="nav-link">Programming</Link>
     </li>
     <li className="menu_list">
       <Link to="/Fiction" className="nav-link">Fiction</Link>
     </li>
     <li className={`menu_list }`}>
       <Link to="/Comic" className="nav-link">Comics</Link>
     </li>
   </ul>
     </div>
    </div>
  );
}
