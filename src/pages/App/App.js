import React, {useState} from 'react';
import Calculator from '../../components/Calculator/Calculator';

function App() {

  const [calcItems, setCalcItems] = useState([
    {name: "Radians", symbol: "Rad", formula: "Rad"},
    {name: "Inverse", symbol: "Inv", formula: "Inv"},
    {name: "Pi", symbol: <>&#960;</>, formula: <>&#960;</> },
    {name: "Euler's Number", symbol: <>&#8455;</>, formula: "e^"},
    {name: "Answer", symbol: "Ans", formula: "Ans"},
    {name: "Degrees", symbol: "Deg", formula: "Deg"},
    {name: "Sine", symbol: "sin", formula: "sin("},
    {name: "Cosine", symbol: "cos", formula: "cos("},
    {name: "Tangent", symbol: "tan", formula: "tan("},
    {name: "Exponential", symbol: "EXP", formula: "10^"},
    {name: "Factorial", symbol: "x!", formula: "!"},
    {name: "Natural logarithm", symbol: "ln", formula: "ln("},
    {name: "Logarithm", symbol: "log", formula: "log("},
    {name: "Root", symbol: <>&#8730;</>, formula: <>&#8730;</>},
    {name: "Power", symbol: <>&#120;&#8319;</>, formula: <>&#120;&#8319;</> },
    {name: "Left paranthesis", symbol: "(", formula: "("},
    {name: "7", symbol: 7, formula: 7},
    {name: "4", symbol: 4, formula: 4},
    {name: "1", symbol: 1, formula: 1},
    {name: "0", symbol: 0, formula: 0},
    {name: "Right paranthesis", symbol: ")", formula: ")"},
    {name: "8", symbol: 8, formula: 8},
    {name: "5", symbol: 5, formula: 5},
    {name: "2", symbol: 2, formula: 2},
    {name: "Point", symbol: ".", formula: "."},
    {name: "Percentage", symbol: "%", formula: "%"},
    {name: "9", symbol: 9, formula: 9},
    {name: "6", symbol: 6, formula: 6},
    {name: "3", symbol: 3, formula: 3},
    {name: "Equals", symbol: <>&#61;</>, formula: "="},
    {name: "All clear", symbol: "AC", formula: "AC"},
    {name: "Divide", symbol: <>&#247;</>, formula: "/"},
    {name: "Multiply", symbol: <>&#215;</>, formula: "*"},
    {name: "Minus", symbol: <>&#8722;</>, formula: "-"},
    {name: "Plus", symbol: <>&#43;</>, formula: "+"},
  ])

  const [calc, setCalc] = useState(0)
  const [run, setRun] = useState([])
  const [input, setInput] = useState([])
  const [sym, setSym] = useState(0)

  // class Node{
  //   constructor(val){
  //     this.val = val
  //     this.next = null
  //   }
  // }

  // class SinglyLinkedList{
  //   constructor(){
  //     this.head = null
  //     this.tail = null
  //     this.length = 0
  //   }
  //   unshift(val){
  //     let newNode = new Node(val)
  //     if(!this.head) {
  //       this.head = newNode
  //       this.tail = this.head
  //     } else {
  //       newNode.next = this.head
  //       this.head = newNode
  //     }
  //     this.length++
  //     return this
  //   }
  // }

  // let list = new SinglyLinkedList()
  
  return (
    <>
      <Calculator calcItems={calcItems} calc={calc} setCalc={setCalc} run={run} setRun={setRun} input={input} setInput={setInput} sym={sym} setSym={setSym} />
    </>
  );
}

export default App;
