import React, {useState} from 'react';
import styles from '../Keypad/Keypad.module.css'

const Keypad = (props) => {
  const handleKey = (evt) => {
    props.handleClick(parseInt(evt.target.innerHTML))
  }

  return (  
    <>
      <div className={styles.keypad_wrapper}>
        <div className={styles.keypad}>
          {props.calcItems.map((calcItem, idx) => 
            <button 
              key={idx}
              className={styles.calc_button}
              onClick={handleKey}
            >
              {calcItem.symbol}
            </button>
          )} 
        </div>
      </div>
    </>
  );
}
 
export default Keypad;