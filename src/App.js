import './App.css';
import { useState } from 'react';

function App() {

  const [data, setData] = useState("");
  const [primeNumber, setprimeNumber] = useState("");
  const [input, setInput] = useState(0);

  const reverseString = () => {
    setData(data.toLowerCase().split("").reverse().join(""));
  }

  const PrimeNUmber = () => {

    let isPrime = true;
    if (primeNumber === 1) {
      console.log("1 is neither prime nor composite number.");
    }

    else if (primeNumber > 1) {

      for (let i = 2; i < primeNumber; i++) {
        if (primeNumber % i == 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        console.log(`Yes`);
      } else {
        console.log(`No`);
      }
    }

    else {
      console.log("No");
    }
  }

  const BiggestNumber = () => {

    function myCompare(A, B) {

      let AB = A + B;

      let BA = B + A;

      return (BA - AB)
    }

    function printLargest(arr) {

      arr.sort(myCompare);
      for (let i = 0; i < arr.length; i++)

        console.log((arr.join("")));
    }


    let arr = [];

    arr.push("54");
    arr.push("546");
    arr.push("548");
    arr.push("60");
    printLargest(arr);

  }

  const stringReverse = () => {
    console.log(parseFloat(
      input
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(input));

  }

  const MaxMinElement=()=>{
    let Arr = [54, 546, 548, 60];
 
    let minValue = Math.min(...Arr);
    let maxValue = Math.max(...Arr);

    console.log(maxValue,minValue);
  }

  return (
    <div>
      <input onChange={(e) => setData(e.target.value)} minLength="1" maxLength="100" />
      <button onClick={() => reverseString()}>Reverse String</button>
      <h1>{data}</h1>

      <input onChange={(e) => setprimeNumber(e.target.value)} minLength="1" maxLength="100" />
      <button onClick={() => PrimeNUmber()}>PrimeNUmber</button>
      <h1>{primeNumber}</h1>

      <button onClick={() => BiggestNumber()}>Largest Number</button>
      <br />
      <input onChange={(e) => setInput(e.target.value)} minLength="1" maxLength="10000" />
      <button onClick={() => stringReverse()}>Reverse String</button>
      <h1>{data}</h1>
      <br/>
      <button onClick={()=> MaxMinElement()}>Max/Min Element</button>
    </div>
  );
}

export default App;
