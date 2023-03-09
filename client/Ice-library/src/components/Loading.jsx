import React from 'react'
import spinner from "./Spinner-1s-200px.gif";
export default function Loading() {
  return (
	<div className='text-center' id='loading'>
  <img src={spinner} alt="loading" width={"100px"} height={"100px"} style={{position:"absolute",zIndex:"99"}} />
  </div>
  )
}