import BooksContext from '../functions/Context';
import UserCards from './UserCards'
import React, { useContext, useEffect, useState } from "react";
import Remove from './alerts/Remove'
import {  useNavigate } from 'react-router-dom';
export default function UserAccount() {
  const history = useNavigate();
  const context = useContext(BooksContext);
	const {user,alert2, get_details}=context;
  useEffect(() => {
      if(localStorage.getItem('key')){
          get_details();
      }
      else{
          console.log("No token")
          history("/login")
      }
  }, []);
  return (
    <>
    {alert2 === true ? <Remove/> : null}
    <div className='Fonts'>Inventory</div> 
    <div className='flex-ca'>
		{user.length>0 ? user.map((element)=>{
			return (<UserCards Name={element.Name} Url={element.Url} Unique={element.Id}/>)
		}) : <div style={{fontSize:"1.3rem",width:"100%",height:"60vh",display:"flex",alignItems:"center",justifyContent:"center" ,textAlign:"center"}}>Nothing to see here folks</div> } 
	</div>
    </>
  )
}
