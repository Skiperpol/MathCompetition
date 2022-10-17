import classes from './KalkPrzyciskCiemny.module.css';

export default function KalkPrzyciskCiemny(parse) {
  return (
    <button className={classes.buttonCiemny} onClick={()=>parse.add(parse.text)}>{parse.text}</button>
  );
}
