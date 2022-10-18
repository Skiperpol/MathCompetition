import Historia from '../components/Kalkulator/Historia';
import Przyciski from '../components/Kalkulator/Przyciski';
import Wyswietlacz from '../components/Kalkulator/Wyswietlacz';
import classes from './Kalkulator.module.css';
import { useState } from 'react';
import Navigation from '../components/Navigation';


import React from "react";



export default function Kalkulator() {
  const [odp, setOdp] = useState("0");
  const [temp, setTemp] = useState("");

  function changeOdp(value){
    setOdp(value)
  }

  const [tekst, setTekst] = useState("");

  function changeTekst(value){
    if(value!="0" && value!="Infinity"){
      setTemp(value+"\n"+temp)
      const tem = value+"\n"+temp
      const odp = String(tem).split('\n').map(str => <p>{str}</p>);
      setTekst(odp)
    }
  }


  return (
    <div className={classes.body}>
      <Navigation/>
      <Historia wynik={tekst}/>
      <Wyswietlacz wynik_main={odp}/>
      <Przyciski wynik_main={changeOdp} wynik={changeTekst}/>
    </div>
  );
}