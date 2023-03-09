import React, {useContext, useEffect}from 'react'
import {Link} from "react-router-dom"
import BooksContext from '../functions/Context';
export default function Cards(props) {
  const context = useContext(BooksContext)
  const {filteruser} = context
  return (
	<div className="card" style={{width:"18rem"}} onClick={()=>{filteruser(props.Unique)}}>
  <Link to="/smth2"><img src={props.Url} class="card-img-top" id='img-card' style={{ height: "350px" }} alt="..."/></Link>
  <div className="card-body">
    <p className="card-text">{props.Name}</p>
  </div>
</div>
  )
}
