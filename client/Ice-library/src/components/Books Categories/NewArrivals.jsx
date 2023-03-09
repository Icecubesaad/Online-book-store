import BooksContext from '../../functions/Context';
import Cards from '../Cards'
import React, { useContext, useEffect, useState } from "react";

export default function NewArrivals() {
	const context = useContext(BooksContext);
	const {books,loading}=context
  return (
	<>
	<div className='flex-ca' data-aos="fade-right">
		{books.map((e)=>{
			return(e.New.map((h)=>{
				return(<Cards Name={h.Name} Unique={h.Id} Url={h.Url} price={h.price}/>)
			}))
		})}
	</div>
	</>
  )
}
