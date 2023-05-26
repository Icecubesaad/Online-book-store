import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BooksContext from "../functions/Context";
import Loggedin from "./buttons/Loggedin";
import NotLoggedIn from "./buttons/NotLoggedIn";
export default function Navbar(props) {
  const context = useContext(BooksContext);
  const { loggedhehe,width } = context;
  const [widthwin, setwidthwin] = useState(true);
  const handleWindowResize = () => {
    if (window.innerWidth < 700) {
      setwidthwin(false);
    } else {
      setwidthwin(true);
    }
  };
  useEffect(() => {
    handleWindowResize()
  }, []);
  return (
    <>
      <div className="header">
        <div className="Logo"><Link to="/">ICE LIBRARY</Link></div>
        {widthwin === true ? <div className="Menu">
        </div>  : null}
        {widthwin === true ? 
          <div className="buttons">
          {loggedhehe === true ? <Loggedin /> : <NotLoggedIn />}
        </div> : <button className="Btn-navbar" onClick={props.props}>≡</button> }
      </div>
    </>
  );
}
