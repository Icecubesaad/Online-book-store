
import BooksContext from '../../functions/Context';
import Cards from '../Cards'
import React, { useContext, useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
    const Comic = () => {
	const context = useContext(BooksContext);
	const {books,loading}=context

  useEffect(() => {
    AOS.init();
}, []);
  return (
    <>
    <div className="flex-ca" data-aos="fade-right">
        {books.map((e) => {
          return e.comics.map((h) => {
            return <Cards Name={h.Name} Url={h.Url} Unique={h.Id} price={h.price} />;
          });
        })}
    </div>
    </>
  );
};

export default Comic;
