import classes from './Wyswietlacz.module.css';


export default function Wyswietlacz(props) {
    return (
        <div className={classes.body}>
            <div className={classes.wyswietlanie}>
                {props.wynik_main}
            </div>
        </div>
    );
  }