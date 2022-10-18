import classes from './Przyciski.module.css';
import KalkPrzyciskBialy from './KalkPrzyciskBialy';
import KalkPrzyciskCiemny from './KalkPrzyciskCiemny';
import React, { useState } from "react";

export default function Przyciski(parse) {
  const [calc, setCalc] = useState("0");
  const [kropki, setKropki] = useState(0);

  function add(value) { 
    if(calc=="Infinity"){
      if(value != "/" && value != "*" && value != "+" && value != "-" && value != "^" && value != "." && value != ")"){
        setKropki(0)
        setCalc(value)
      }
    }
    else{
      if (String(calc).length < 50) {
        var lastItem = String(calc).slice(-1);
        if (lastItem == "/" || lastItem == "*" || lastItem == "+" || lastItem == "-" || lastItem == "^") {
          setKropki(0)
        }
        if (((value == "." && kropki == 0) || value != ".")) {
          if (value != "(" || (value == "(" && (lastItem == "/" || lastItem == "*" || lastItem == "+" || lastItem == "-" || lastItem == "^" || lastItem == "(")) || (value == "(" && lastItem == 0 && String(calc).length == 1)) {
            if (value == ".")
              setKropki(kropki + 1)
            if (String(calc) == 0 && (value != "/" && value != "*" && value != "+" && value != "-" && value != "^")) {
              setCalc(value)
            }
            else {
              if (value != "." || (lastItem != "/" && lastItem != "*" && lastItem != "+" && lastItem != "-" && lastItem != "^" && lastItem != "(")) {
                if ((lastItem == "/" || lastItem == "*" || lastItem == "+" || lastItem == "-" || lastItem == "^" || lastItem == ".") && (value == "/" || value == "*" || value == "+" || value == "-" || value == "^")) {
                  setCalc(String(calc).slice(0, -1) + String(value));
                }
                else {
                  if ((lastItem == "(" && (value != "/" && value != "*" && value != "+" && value != "^")) || lastItem != "(")
                    setCalc(String(calc) + String(value));
                }
              }
            }
          }
        }
      }
    }
  }

  React.useEffect(() => {
    parse.wynik_main(calc)
  }, [calc])



  function backspaceFunc() {
    if(calc=="Infinity"){
      setKropki(0)
      setCalc(0)
    }
    else{
      var lastItem = String(calc).slice(-1);
      if (lastItem == ".") {
        setKropki(0)
      }
      if (String(calc) != 0 && String(calc).length > 1)
        setCalc(String(calc).slice(0, -1))
      else
        setCalc(0)
    }
  }


  function strReplace(str, replace, to) {
    var temp = RegExp(replace, 'g')
    var odp = str.toString().replace(temp, to);
    return odp
  }

  function wynik() {
    var lastItem = String(calc).slice(-1);
    let licz
    if (lastItem == "/" || lastItem == "*" || lastItem == "+" || lastItem == "-" || lastItem == "^" || lastItem == ".") {
      setCalc(String(calc).slice(0, -1));
      licz = strReplace(String(calc).slice(0, -1), '\\^', '**')
    }
    else {
      licz = strReplace(calc, '\\^', '**')
    }
    try {
      var liczbaNawiasow = (String(calc).split("(").length - 1) - (String(calc).split(")").length - 1);
      if (liczbaNawiasow > 0) {
        for (let i = 0; i < liczbaNawiasow; i++) {
          setCalc(String(calc) + ")");
          licz += ")";
        }
      }
      setCalc(eval(licz))
      parse.wynik(eval(licz))
    }
    finally {
      console.log(licz)
      console.log("Błędne dane")
    }
  }



  function reset() {
    setCalc(0)
    setKropki(0)
  }

  return (
    <div className={classes.body}>
      <div className={classes.buttonBox}>
        <table>
          <tbody>
            <tr>
              <td>
                <KalkPrzyciskCiemny add={reset} text={"C"} />
              </td>
              <td>
                <KalkPrzyciskCiemny add={add} text={"^"} />
              </td>
              <td colSpan={2}>
                <KalkPrzyciskCiemny add={backspaceFunc} text={"Backspace"} />
              </td>
            </tr>
            <tr>
              <td>
                <KalkPrzyciskCiemny add={add} text={"("} />
              </td>
              <td>
                <KalkPrzyciskCiemny add={add} text={")"} />
              </td>
              <td>
                <KalkPrzyciskCiemny text={"%"} />
              </td>
              <td>
                <KalkPrzyciskCiemny add={add} text={"/"} />
              </td>
            </tr>
            <tr>
              <td>
                <KalkPrzyciskBialy add={add} text={"7"} />
              </td>
              <td>
                <KalkPrzyciskBialy add={add} text={"8"} />
              </td>
              <td>
                <KalkPrzyciskBialy add={add} text={"9"} />
              </td>
              <td>
                <KalkPrzyciskCiemny add={add} text={"*"} />
              </td>
            </tr>
            <tr>
              <td>
                <KalkPrzyciskBialy add={add} text={"4"} />
              </td>
              <td>
                <KalkPrzyciskBialy add={add} text={"5"} />
              </td>
              <td>
                <KalkPrzyciskBialy add={add} text={"6"} />
              </td>
              <td>
                <KalkPrzyciskCiemny add={add} text={"-"} />
              </td>
            </tr>
            <tr>
              <td>
                <KalkPrzyciskBialy add={add} text={"1"} />
              </td>
              <td>
                <KalkPrzyciskBialy add={add} text={"2"} />
              </td>
              <td>
                <KalkPrzyciskBialy add={add} text={"3"} />
              </td>
              <td>
                <KalkPrzyciskCiemny add={add} text={"+"} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <KalkPrzyciskBialy add={add} text={"0"} />
              </td>
              <td>
                <KalkPrzyciskCiemny add={add} text={"."} />
              </td>
              <td>
                <KalkPrzyciskCiemny add={wynik} text={"="} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
