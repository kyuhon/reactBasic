import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState, useEffect, useRef } from 'react'
import Even from './components/Even'

function App() {
 const [count, setCount] = useState(0);
 const [input, setInput] = useState('');
 const isMount = useRef(false);
 //마운트될때, 모든 스테이트가 바뀔때 업데이트
 useEffect(()=>{
  if(isMount.current === false){
    isMount.current = true;
    return;
  }
  console.log(`(Update)count: ${count} ${input}`);
},);

 const onClickButton = (value)=>{
    setCount(count + value)
 };
 //input 변화된값 setting
 const onChangeInput = (e)=>{
    setInput(e.target.value);
 };

  return (
    <div className='app'> 
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={input} onChange={onChangeInput}/>
      </section>
      <section className='viewer'>
        <Viewer count={count}/>
        {count % 2 === 0? <Even />:null}
      </section>
      <section className='controller'>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

function App2() {
  const [count, setCount] = useState(0);
 
  const onClickButton = (value)=>{
     setCount(count + value)
  };
 
   return (
     <div className='app'> 
       <h1>Simple Counter</h1>
       <section className='viewer'>
         <Viewer count={count}/>
       </section>
       <section className='controller'>
         <Controller onClickButton={onClickButton}/>
       </section>
     </div>
   )
 }
 
export default App
