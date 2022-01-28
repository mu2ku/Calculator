import React from 'react';
import styles from '../Screen/Screen.module.css'

const Screen = (props) => {

  return ( 
    <>
      <div className={styles.screen_wrapper}>
        <div className={styles.screen}>
          {props.sum}
        </div>
      </div>
    </>
   );
}
 
export default Screen;