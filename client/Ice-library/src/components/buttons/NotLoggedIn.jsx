import React from "react";
import {Link} from 'react-router-dom'
const NotLoggedIn = () => {
  return (
    <div>
      <button className="sign-in btn btn-light">
        <Link to="/login">sign in</Link>
      </button>
      <button className="sign-out btn btn-light">
        <Link to="/sign up">sign up</Link>
      </button>
    </div>
  );
};

export default NotLoggedIn;
