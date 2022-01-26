import React from 'react';
import styles from '../Calculator/Calculator.module.css'
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

const Calculator = (props) => {
  return ( 
    <>
      <div className={styles.wrapper}>
        <div className={styles.calculator}>
          <Screen />
          <Keypad calcItems={props.calcItems}/>
        </div>
      </div>
    </>
   );
}
 
export default Calculator;