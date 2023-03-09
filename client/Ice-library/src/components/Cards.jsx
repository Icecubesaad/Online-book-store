import React, {useContext, useEffect}from 'react'
import {Link} from "react-router-dom"
import BooksContext from '../functions/Context';
export default function Cards(props) {
  const context = useContext(BooksContext)
  const {filter} = context
  return (
	<div className="card" style={{width:"18rem"}} onClick={()=>{filter(props.Unique)}}>
  <Link to="/smth"><img src={props.Url} class="card-img-top" id='img-card' alt="..."  style={{ height: "350px" }}/></Link>
  <div className="card-body">
    <p className="card-text">{props.Name}</p>
    <p className='card-text' style={{color:"red"}}>{props.price}</p>
  </div>
</div>
  )
}
