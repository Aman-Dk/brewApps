import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Routes,Route } from "react-router-dom"


ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={ <App/>} />
        <Route path='Trending' element={ <App />} />
        <Route path='Latest-shows' element={ <App/>} />
        <Route path='Most-Popular' element={ <App/>} />
        <Route path='In-Genesis' element={ <App/>} />
        <Route path='In-Temple' element={ <App/>} />
        <Route path='In-Void' element={ <App/>} />
        <Route path='#BAYC' element={ <App/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

