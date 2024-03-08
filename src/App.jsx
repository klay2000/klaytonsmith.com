import React from 'react';
import './App.css';
import {Blurb} from './blurb/Blurb.jsx';
import {Me} from './me/Me.jsx';
import { GHWrapper } from './gh-wrapper/GHWrapper.jsx';

function App() {
  return (
    <div className='app'>
        <Me/>
        <Blurb />
        <GHWrapper />
    </div>
  );
}

export default App;
