import React, { useEffect } from 'react';
import styles from '../Keypad/Keypad.module.css'

const Keypad = (props) => {
  
  const handleKey = (evt) => {
    let key = evt.target.innerHTML
    if(parseInt(key)) props.handleClick(parseInt(key))
    else if(key === "AC") props.setSum(0)
    else if(evt.target.id === "Plus") props.setTest([props.sum,...props.test])
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
              id={calcItem.name}
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