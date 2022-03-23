import React from 'react';
import styles from '../Screen/Screen.module.css'

const Screen = (props) => {

  return ( 
    <>
      <div className={styles.screen_wrapper}>
        <div className={styles.screen}>
          <div className={styles.screen_inputs}>
            {[...props.input].reverse()}
          </div>
          <div className={styles.screen_answer}>
            {props.run[0]}
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Screen;