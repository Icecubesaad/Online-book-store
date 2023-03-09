import './App.css'
import Navbar from './components/Navbar'
import BooksState from './functions/BookAccount'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage'
import DifferentPages from './components/DifferentPages'
import UserAccount from './components/UserAccount'
import UserDifferentPages from './components/UserDifferentPages';
import Signin from './components/authentication/Signin';
import Signup from './components/authentication/Signup';
import { useState } from 'react';
import Sidebar from './components/sidebar';
import Comic from './components/Books Categories/Comic';
import Books from './components/Books';
import Fiction from './components/Books Categories/Fiction';
import NewArrivals from './components/Books Categories/NewArrivals';
function App() {
  const [sidebar, setsidebar] = useState(false);
  const [style, setstyle] = useState({display:"none",transform:"translateX(-100%)"});
  const open=()=>{
    setsidebar((pr)=>!pr)
    console.log(sidebar)
    setstyle({display:"flex",transform:"translateX(0%)"})
  }
  const close =()=>{
    setsidebar((pr)=>!pr)
    console.log("SKL")
  }
  return (
    <>
        <BooksState>
          <Router>
          {sidebar === true ? <Sidebar style={style} close={close}/> : 
          <>
            <Navbar props={open} />
            <Routes>
              <Route path='/' element={<Homepage><NewArrivals/></Homepage>} />
              <Route path='/Comic' element={<Homepage><Comic /></Homepage>} />
              <Route path='/programming' element={<Homepage><Books /></Homepage>} />
              <Route path='/Fiction' element={<Homepage><Fiction /></Homepage>} />
              <Route path='/login' element={<Signin/>} />
              <Route path='/sign up' element={<Signup/>} />
              <Route path='/smth' element={<DifferentPages />} />
              <Route path='/smth2' element={<UserDifferentPages />} />
              <Route path='/User_account' element={<UserAccount />} />
            </Routes>
            </> 
  }
          </Router>
        </BooksState>
    </>
  )
}

export default App
