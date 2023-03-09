import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BooksContext from '../functions/Context';

const Sidebar = (props) => {
    const context = useContext(BooksContext);
    const {loggedhehe,setlog} = context
    const clear=()=>{
        localStorage.clear()
    }
    return (
        <div className='sidebar' style={props.style}>
            <button id='Btn' onClick={props.close}>X</button>
            <ul>
            <li><Link to="/" onClick={props.close}>Home</Link></li>
            <li><Link to="/User_account" onClick={props.close}>Account</Link></li>
            {loggedhehe?<li><Link to="/login" onClick={()=>{props.close(),setlog(false),clear}}>Logout</Link></li>:
            <>
            <li><Link to="/sign up" onClick={props.close}>sign up</Link></li>
            <li><Link to="/login" onClick={props.close}>sign in</Link></li>
            </>
        }
            </ul>
        </div>
    );
}

export default Sidebar;
