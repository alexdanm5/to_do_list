import { Routes, Route } from 'react-router-dom';

import {ToDo} from '../toDo/ToDo';
import SingIn from '../singIn/SingIn';
import {Tetris} from '../tetris/Tetris';
import {Nav} from '../nav/Nav';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<ToDo/>}/>
        <Route path='/singIn' element={<SingIn/>}/>
        <Route path='/tetris' element={<Tetris/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
