import classes from './Historia.module.css';
import React, { useState } from "react";

export default function Historia(props) {

  return (
    <div className={classes.body}>
        <div className={classes.titleHistoria}>
            Historia
        </div>    
        <div className={classes.daneHistoria}>
          {props.wynik}
        </div>        
    </div>
  );
}
