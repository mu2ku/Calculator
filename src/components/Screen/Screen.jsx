import React, {useState} from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import styles from '../Screen/Screen.module.css'

const Screen = (props) => {


 if(props.input[0]=== "+")

  {return ( 
    <>
      <div className={styles.screen_wrapper}>
        <div className={styles.screen}>
          <div className={styles.screen_inputs}>
            {[...props.input].reverse()}{props.sym}
          </div>
          <div className={styles.screen_answer}>
            {props.run[0]+props.sym}
          </div>
        </div>
      </div>
    </>
   );}

 else if(props.input[0]=== "-")

  {return ( 
    <>
      <div className={styles.screen_wrapper}>
        <div className={styles.screen}>
          <div className={styles.screen_inputs}>
            {[...props.input].reverse()}{props.sym}
          </div>
          <div className={styles.screen_answer}>
            {props.run[0]-props.sym}
          </div>
        </div>
      </div>
    </>
   );}

   else if(props.input[0]=== "*" && props.sym !== 0)

   {return ( 
     <>
       <div className={styles.screen_wrapper}>
         <div className={styles.screen}>
           <div className={styles.screen_inputs}>
             {[...props.input].reverse()}{props.sym}
           </div>
           <div className={styles.screen_answer}>
             {props.run[0]*props.sym}
           </div>
         </div>
       </div>
     </>
    );}
 
   else if(props.input[0]=== "*")

  {return ( 
    <>
      <div className={styles.screen_wrapper}>
        <div className={styles.screen}>
          <div className={styles.screen_inputs}>
            {[...props.input].reverse()}{props.sym}
          </div>
          <div className={styles.screen_answer}>
            {props.run[0]}
          </div>
        </div>
      </div>
    </>
   );}

   else if(props.input[0]=== "/" && props.sym !== 0)

  {return ( 
    <>
      <div className={styles.screen_wrapper}>
        <div className={styles.screen}>
          <div className={styles.screen_inputs}>
            {[...props.input].reverse()}{props.sym}
          </div>
          <div className={styles.screen_answer}>
            {props.run[0]/props.sym}
          </div>
        </div>
      </div>
    </>
   );}

   else if(props.input[0]=== "/")

  {return ( 
    <>
      <div className={styles.screen_wrapper}>
        <div className={styles.screen}>
          <div className={styles.screen_inputs}>
            {[...props.input].reverse()}{props.sym}
          </div>
          <div className={styles.screen_answer}>
            {props.run[0]}
          </div>
        </div>
      </div>
    </>
   );}

   else {
     return ( 
      <>
        <div className={styles.screen_wrapper}>
          <div className={styles.screen}>
            <div className={styles.screen_inputs}>
              {[...props.input].reverse()}{props.sym}
            </div> 
          </div>
        </div>
      </>
   );

   }


}
 
export default Screen;