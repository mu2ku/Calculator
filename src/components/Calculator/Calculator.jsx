import React, {useState, useEffect} from 'react';
import styles from '../Calculator/Calculator.module.css'
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

const Calculator = (props) => {
  const [num, setNum] = useState(props.sum)

  const handleClick = (evt) => {
    props.setSum((props.sum *10)+evt)
  }

  useEffect(()=>{
    setNum(props.sum)
  },[props.sum])

  return ( 
    <>
      <div className={styles.wrapper}>
        <div className={styles.calculator}>
          <Screen num={num} />
          <Keypad calcItems={props.calcItems} handleClick={handleClick} />
        </div>
      </div>
    </>
   );
}
 
export default Calculator;