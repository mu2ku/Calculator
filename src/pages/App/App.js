import React, {useState} from 'react';
import Calculator from '../../components/Calculator/Calculator';

function App() {

  const [calcItems, setCalcItems] = useState([
    {name: "Radians", symbol: "Rad"},
    {name: "Inverse", symbol: "Inv"},
    {name: "Pi", symbol: <>&#960;</>},
    {name: "Euler's Number", symbol: <>&#8455;</> },
    {name: "Answer", symbol: "Ans"},
    {name: "Degrees", symbol: "Deg"},
    {name: "Sine", symbol: "sin"},
    {name: "Cosine", symbol: "cos"},
    {name: "Tangent", symbol: "tan"},
    {name: "Exponential", symbol: "EXP"},
    {name: "Factorial", symbol: "x!"},
    {name: "Natural logarithm", symbol: "ln"},
    {name: "Logarithm", symbol: "log"},
    {name: "Root", symbol: <>&#8730;</>},
    {name: "Power", symbol: <>&#120;&#8319;</>},
    {name: "Left paranthesis", symbol: "("},
    {name: "Right paranthesis", symbol: ")"},
    {name: "Percentage", symbol: "%"},
    {name: "All clear", symbol: "AC"},
    {name: "Divide", symbol: <>&#247;</>},
    {name: "Multiply", symbol: <>&#215;</>},
    {name: "Minus", symbol: <>&#8722;</>},
    {name: "Plus", symbol: <>&#43;</>},
    {name: "Equals", symbol: <>&#61;</>},
    {name: "Point", symbol: "."},
    {name: "0", symbol: 0},
    {name: "1", symbol: 1},
    {name: "2", symbol: 2},
    {name: "3", symbol: 3},
    {name: "4", symbol: 4},
    {name: "5", symbol: 5},
    {name: "6", symbol: 6},
    {name: "7", symbol: 7},
    {name: "8", symbol: 8},
    {name: "9", symbol: 9},
  ])
  
  return (
    <>
      <Calculator calcItems={calcItems} />
    </>
  );
}

export default App;
