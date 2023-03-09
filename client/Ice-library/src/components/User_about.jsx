import React, { useContext } from 'react';
import { useEffect } from 'react';
import BooksContext from '../functions/Context';

const UserAbout = () => {
    const context = useContext(BooksContext)
    const {getdetails} = context
    useEffect(() => {
        if(localStorage.getItem('key')){

            getdetails();
        }
        else{
            console.log("No token")
        }
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default UserAbout;
