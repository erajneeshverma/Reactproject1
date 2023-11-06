import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(15);

  //let counter=5;
  //yaha pe react hm function ki help se variable update nahi kr pa rhe 
  //yahi kaam hooks solve krta hai 
  //react ui updation ko control krta h
  const addValue=()=>{
    console.log("Clicked",counter)
    //counter = counter+1;
    if(counter>=30){
      setCounter(30);
    }else{
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      setCounter(prevCounter=> prevCounter+1);
      setCounter(prevCounter=> prevCounter+1);
      setCounter((prevCounter)=>(prevCounter+1));
      setCounter((prevCounter)=>(prevCounter+1));
    }
    console.log("Value Added : ",Math.random()*10);
  }
  const removeValue = () =>{
    console.log("Clicked",counter)
    //counter = counter-1;
    if(counter==0){
      setCounter(0);
    }else{
      // setCounter(counter-1);
      // setCounter(counter-1);
      // setCounter(counter-1);
      // setCounter(counter-1);
      setCounter(prevCounter=> prevCounter-1);
      setCounter(prevCounter=> prevCounter-1);
      setCounter((prevCounter)=>(prevCounter-1));
      setCounter((prevCounter)=>(prevCounter-1));
    }
    console.log("Value Removed : ", Math.random()*10);
  }
  return (
    <>
      <h1>Chai and React</h1>
      <h1>Couter Value : {counter} </h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
