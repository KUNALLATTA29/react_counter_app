import { useState } from "react"


  

function App() {

  let [counter, setCounter] = useState(0);

  let addition = ()=>{
    setCounter(counter+1);
  }

  let removing = ()=>{
    if(counter == 0){
      counter = 0;
      setCounter(counter);
    }else{
      setCounter(counter-1);
    }
  }
  

  return (
    <>
      <h1>this is counter {counter}</h1>
      <button
      onClick={addition}
      >
        Add
      </button>
      <button
      onClick={removing}
      >
        Remove
      </button>
    </>
  )
}

export default App