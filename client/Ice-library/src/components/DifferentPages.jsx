import React, { useContext } from 'react'
import BooksContext from '../functions/Context'
import Alert from './alerts/Alert';
import Error from './alerts/Error';
import Cards from './Cards';
export default function DifferentPages() {
  const context = useContext(BooksContext);
  const {filterUI,buy,alert1,alert_error1} = context
  return (
    <>
    {alert_error1 === true ? <Error/> : null}
    {alert1 === true ? <Alert/>:null}
    {filterUI.map((element)=>{
      return(
        <div className='page'>
        <div className='picture'>
        <Cards Name={element.Name} Url={element.Url} Unique={element.Id}/>
        </div>
        <div className='info'>
        <h2 className='my-2'>Title : {element.Name}</h2>
        <h2 className='my-2'>Author : {element.author}</h2>
        <h3 className='my-2'>Description : {element.description}</h3>
        <h3 className='my-2'>Pages : {element.pages}</h3>
        <h3 className='my-3'>Price : {element.price}</h3>
        <button className='btn_sale btn btn-danger btn-lg' id='btn-dif' onClick={()=>{buy(element.Id,element.Name,element.Url,element.price,element.description,element.author,element.pages)}}>Buy</button>
        </div>
        </div>
      )
		})}
    </>
  )
}
