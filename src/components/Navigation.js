import { Link } from "react-router-dom";
import logo from '../img/Logo2.png';
import classes from './Navigation.module.css';

function Navigation() {
    function changeVisibility(first, second) {
        document.documentElement.style.setProperty('--a-visibility_1', first);
        document.documentElement.style.setProperty('--a-visibility_2', second);
    }

    function changeBorder(first, second) {
        document.documentElement.style.setProperty('--a-border_1', first);
        document.documentElement.style.setProperty('--a-border_2', second);
    }

    function changeNav(first, second, third, fourth) {
        changeVisibility(first, second);
        changeBorder(third, fourth);
    }
    return (
        <div className={classes.nav}>
            <img className={classes.img_logo} src={logo} alt="Logo" />
            <li>
                <Link className={classes.link_1} onClick={() => changeNav('visible', 'hidden', 'white', 'rgb(130, 130, 130)')} to='/'>Home</Link>
            </li>
            <li>
                <Link className={classes.link_2} onClick={() => changeNav('hidden', 'visible', 'rgb(130, 130, 130)', 'white')} to='/kalkulator'>Kalkulator</Link>
            </li>
        </div>
    );
}

export default Navigation;