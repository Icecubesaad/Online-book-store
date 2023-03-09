import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BooksContext from "../../functions/Context";
const Loggedin = () => {
  const context = useContext(BooksContext);
  const { setlog } = context;
  const clear = () => {
    setlog(false)
    localStorage.clear()
  };
  return (
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"20px"}}>
    <button style={{background:"transparent"}}><Link to="/User_account"><svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.15" d="M18.0001 14L21.0001 5H4.78577L6.07148 14H18.0001Z" fill="#000000"/>
    <path d="M2 3H4.5L6.5 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM6.07142 14H18L21 5H4.78571M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></Link></button>
      <button className="sign-in btn btn-light" style={{marginRight:"20px"}} onClick={clear}>
        <Link to="/login">logout</Link>
      </button>
    </div>
  );
};

export default Loggedin;
