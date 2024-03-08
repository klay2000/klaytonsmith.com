import React from 'react';
import './Blurb.css';

export const Blurb = () => {

  return (
    <div className="blurb">
      <div className="greeting"><p className='blurbText'>Hi there!</p></div>
      <div className="nameIntro"><p className='blurbText'>My name is</p></div>
      <div className="name"><p className='blurbText'>Klayton Smith</p></div>
      <div className="makeStuff"><p className='blurbText'>I make stuff!</p></div>
    </div>
  );
}