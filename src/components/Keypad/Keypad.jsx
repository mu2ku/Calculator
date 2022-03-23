import React, { useEffect, useState } from 'react';
import styles from '../Keypad/Keypad.module.css'

const Keypad = (props) => {
  
  const handleKey = (evt) => {
    let key = evt.target.innerHTML
    
    if(parseInt(key) || parseInt(key) === 0) {
      props.handleClick(parseInt(key))
    } else {
      props.handleClick(evt.target.id)
    }

    //Reset sum to 0 and run to empty array
    if(key === "AC") {
      props.setCalc(0)
      props.setSym(0)
      props.setRun([])
      props.setInput([])
      props.setStatus()
    }
    
    if(evt.target.id === "+") {
      if(props.run.length !== 0) {
        props.setRun([props.calc+props.run[0],...props.run])
      } else {
        props.setRun([props.calc,...props.run])
      }
      props.setInput(["+",props.sym, ...props.input])
      props.setCalc(0)
      props.setSym(0)
    } 

    if(evt.target.id === "-") {
      if(props.run.length !== 0) {
        props.setRun([props.run[0]-props.calc,...props.run])
      } else {
        props.setRun([props.calc,...props.run])
      }
      props.setInput(["-",props.sym, ...props.input])
      props.setCalc(0)
      props.setSym(0)
    } 

    if(evt.target.id === "*") {
      if(props.run.length !== 0) {
        props.setRun([props.run[0]*props.calc,...props.run])
      } else {
        props.setRun([props.calc,...props.run])
      }
      props.setInput(["*",props.sym, ...props.input])
      props.setCalc(0)
      props.setSym(0)
    } 

    if(evt.target.id === "/") {
      if(props.run.length !== 0) {
        props.setRun([props.run[0]/props.calc,...props.run])
      } else {
        props.setRun([props.calc,...props.run])
      }
      props.setInput([<>&#247;</>,props.sym, ...props.input])
      props.setCalc(0)
      props.setSym(0)
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
              id={calcItem.formula}
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