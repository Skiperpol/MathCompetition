import Historia from '../components/Kalkulator/Historia';
import Przyciski from '../components/Kalkulator/Przyciski';
import Wyswietlacz from '../components/Kalkulator/Wyswietlacz';
import classes from './Kalkulator.module.css';
import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function Kalkulator() {
  const [odp, setOdp] = useState("0");

  function changeOdp(value){
    setOdp(value)
  }

  return (
    <div className={classes.body}>
      <Navigation/>
      <Historia/>
      <Wyswietlacz wynik_main={odp}/>
      <Przyciski wynik_main={changeOdp}/>
    </div>
  );
}