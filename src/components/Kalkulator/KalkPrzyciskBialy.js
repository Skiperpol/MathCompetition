import classes from './KalkPrzyciskBialy.module.css';

export default function KalkPrzyciskBialy(parse) {
  return (
    <button className={classes.buttonBialy}  onClick={()=>parse.add(parse.text)}>{parse.text}</button>
  );
}
