import Spline from '@splinetool/react-spline';
import classes from './Home.module.css';
import Line from '../components/Home/Linia';
import Navigation from '../components/Navigation';

export default function App() {

  document.documentElement.style.setProperty('--loading-display', "flex");
  document.documentElement.style.setProperty('--wholeBox-display', "none");



  function changeBorder() {
    document.documentElement.style.setProperty('--loading-display', "none");
    document.documentElement.style.setProperty('--wholeBox-display', "block");
  }

  function wait() {
    setTimeout(() => { changeBorder()}, 1000);
  }
  return (
    <div className={classes.box}>
      <div className={classes.loading}>
        <div>
          <div className={classes.lds_ring}><div></div><div></div><div></div><div></div></div>
      </div>
      </div>
      <div className={classes.wholeBox}>
      <Navigation/>
      <div className={classes.tekst_box}>
        <div className={classes.linia}>
          <Line />
        </div>
        <div className={classes.title}>
          SZKOLNY KONKURS PROGRAMISTYCZNY
        </div>
        <div className={classes.description}>
          Strona stworzona przez <b>Dawida Błaszczyka</b> na szkolny konkurs zorganizowany z okazji <b>"Dnia Tabliczki Mnożenia"</b>. Użytymi technologiami są <b>React</b> oraz <b>Spline Design</b>.
        </div>
      </div>
      <div className={classes.kalkulator_box}>
        <div className={classes.kalkulator_min_box}>
          {/* <Spline onLoad={() => {console.log("123")}} className={classes.kalkulator} scene="https://prod.spline.design/DBn0hYuRmRgGVMx8/scene.splinecode" /> */}
          <Spline onLoad={wait} className={classes.kalkulator} scene="https://prod.spline.design/DBn0hYuRmRgGVMx8/scene.splinecode" />
        </div>
      </div>
      </div>
    </div>
  );
}
