import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import {ToDo} from '../toDo/ToDo';
import SingIn from '../singIn/SingIn';
import {Tetris} from '../tetris/Tetris';
import {Nav} from '../nav/Nav';
import Profile from '../profile/Profile';

import './App.scss';


function App() {
  const [logRes, setLogRes] = useState(false);

  const logIn = (res) => {
    setLogRes(res);
  }

  const logOut = (res) => {
    setLogRes(res);
  }

  const content = logRes ? <Profile getResOut={logOut}/> : <SingIn getRes={logIn}/>;
  

  return (
    <div className="App">
      <Nav stateLogIn={logRes}/>
      <Routes>
        <Route path='/' element={<ToDo/>}/>
        <Route path='/singIn' element={content}/>
        <Route path='/tetris' element={<Tetris/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
