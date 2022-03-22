import React, {useState, useEffect} from 'react';
import styles from '../Calculator/Calculator.module.css'
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

const Calculator = (props) => {

  const [status, setStatus] = useState()

  const handleClick = (evt) => {
    if(Number.isInteger(evt)) {
      props.setSum((props.sum *10)+evt)
    } else {
      setStatus(evt)
    }
  }

  return ( 
    <>
      <div className={styles.wrapper}>
        <div className={styles.calculator}>
          <Screen sum={props.sum} />
          <Keypad status={status} calcItems={props.calcItems} handleClick={handleClick} setSum={props.setSum} sum={props.sum} test={props.test} setTest={props.setTest}/>
        </div>
      </div>
    </>
   );
}
 
export default Calculator;