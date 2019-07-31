import React from 'react';
import numbers from './Numbers';

const NumberButton = props => {
  return (
    <>
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        props.numbers
      }
    </>
  );
};

export default NumberButton;
