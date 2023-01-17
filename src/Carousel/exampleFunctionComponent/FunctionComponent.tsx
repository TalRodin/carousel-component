import React from 'react';
import './FunctionComponent.css';

const FunctionComponent = () => {
  let numberCards = new Array(6).fill('🤗');
  return (
    <div className='function-wrapper'>
      {numberCards.map((el, i) => {
        return (
          <div key={i} className='card' tabIndex={0}>
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default FunctionComponent;
