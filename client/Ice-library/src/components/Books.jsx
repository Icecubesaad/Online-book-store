import BooksContext from '../functions/Context';
import Cards from './Cards'
import React, { useContext } from "react";

export default function Books() {
	const context = useContext(BooksContext);
	const {books,loading}=context
  return (
	<>
	<div className='flex-ca' data-aos="fade-right">
		{books.map((e)=>{
			return(e.Coding.map((h)=>{
				return(<Cards Name={h.Name} Unique={h.Id} Url={h.Url} price={h.price}/>)
			}))
		})}
	</div>
	</>
  )
}
