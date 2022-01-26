import React, {useState} from 'react';
import styles from '../Keypad/Keypad.module.css'

const Keypad = (props) => {
  
  return (  
    <>
      <div className={styles.keypad_wrapper}>
        <div className={styles.keypad}>
          {props.calcItems.map((calcItem, idx) => 
            <button key={idx}>{calcItem.symbol}</button>
          )} 
        </div>
      </div>
    </>
  );
}
 
export default Keypad;