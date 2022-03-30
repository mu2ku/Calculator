import React, {useState, useEffect} from 'react';
import styles from '../Calculator/Calculator.module.css'
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

const Calculator = (props) => {

  const [status, setStatus] = useState()

  const handleClick = (evt) => {
    if(Number.isInteger(evt)) {
      props.setCalc((props.calc *10)+evt)
      props.setSym((props.sym *10)+evt)
    } else if (evt === "=") {
      setStatus("Answer")
    }
  }

  return ( 
    <>
      <div className={styles.wrapper}>
        <div className={styles.calculator}>
          <Screen input={props.input} run={props.run} status={status} sym={props.sym} />
          <Keypad status={status} setStatus={setStatus} calcItems={props.calcItems} handleClick={handleClick} setCalc={props.setCalc} calc={props.calc} run={props.run} setRun={props.setRun} input={props.input} setInput={props.setInput} sym={props.sym} setSym={props.setSym} />
        </div>
      </div>
    </>
   );
}
 
export default Calculator;