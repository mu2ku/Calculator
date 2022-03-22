import React, { useEffect, useState } from 'react';
import styles from '../Keypad/Keypad.module.css'

const Keypad = (props) => {
  
  const handleKey = (evt) => {
    let key = evt.target.innerHTML
    console.log(key)
    
    if(parseInt(key) || parseInt(key) === 0) {
      props.handleClick(parseInt(key))
      console.log(key)
    } else {
      props.handleClick(evt.target.id)
    }

    //Reset sum to 0 and test to empty array
    if(key === "AC") {
      props.setSum(0)
      props.setTest([])
    }
    
    if(evt.target.id === "Plus") {
      if(props.test.length !== 0) {props.setTest([props.sum+props.test[0],...props.test])}
      else {props.setTest([props.sum,...props.test])}
      props.setSum(0)
    } 
    
    else if(evt.target.id === "Minus"){
      if(props.test.length !== 0) {props.setTest([props.test[0]-props.sum,...props.test])}
      else {props.setTest([props.sum,...props.test])}
      props.setSum(0)
    } else if(evt.target.id === "Equals"){
      if(props.status === "Plus") {
        props.setSum(props.test[0]+props.sum)
        props.setTest([props.test[0]+props.sum])
      }
      if(props.status === "Minus") {
        props.setSum(props.test[0]-props.sum)
        props.setTest([props.test[0]-props.sum])
      }
    }
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