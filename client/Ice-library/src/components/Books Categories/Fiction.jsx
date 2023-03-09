
import BooksContext from '../../functions/Context';
import Cards from '../Cards'
import React, { useContext, useEffect, useState } from "react";
    const Fiction = () => {
	const context = useContext(BooksContext);
	const {books,loading}=context
  return (
    <>
    <div className="flex-ca" data-aos="fade-right">
        {books.map((e) => {
          return e.Fiction.map((h) => {
            return <Cards Name={h.Name} Url={h.Url} Unique={h.Id} price={h.price} />;
          });
        })}
    </div>
    </>
  );
};

export default Fiction;
