import React, { useEffect, useState } from 'react';
import Button from './Button.js';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Posts from './Pages/Posts.js';
import Coments from './Pages/Coments.js';
import Users from './Pages/Users.js';
import { useDispatch, useSelector } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type/index.js';

function App() {
  const name = useSelector(function (state) {
    return state.currentUser.name;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(evt) => {
          dispatch({
            type: 'edit-current-user-name',
            payload: {
              name: evt.target.value,
            },
          });
        }}
      />
    </div>
  );

  // return (
  //   <Router>
  //     <nav>
  //       <Link to="/"> Posts </Link>
  //       <Link to="/Coments"> Coments </Link>
  //       <Link to="/Users"> Users </Link>
  //     </nav>
  //     <Routes>
  //       <Route path="/" element={<Posts />}></Route>
  //       <Route path="/Coments" element={<Coments />} />
  //       <Route path="/Users" element={<Users />} />
  //     </Routes>
  //   </Router>
  // );
}

export default App;
