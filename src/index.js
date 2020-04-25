import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDice, faDiceOne, faPencilAlt, faUsers, faPlusCircle, faListAlt, faCheckCircle, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import App from './components/App/App';
import './index.css';

library.add(
  faDice,
  faDiceOne,
  faPencilAlt, 
  faUsers, 
  faListAlt, 
  faPlusCircle,
  faCheckCircle,
  faCheck,
  faTrash  
);

ReactDOM.render( 
  <BrowserRouter >
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);