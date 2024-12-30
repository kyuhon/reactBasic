import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState } from 'react'


function App() {
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

function App2() {
  const [inputValue, setInputValue] = useState(''); // 현재 입력 값
  const [result, setResult] = useState(null);      // 계산 결과
  const [operator, setOperator] = useState(null);  // 현재 연산자

  const handleNumberClick = (value) => {
    setInputValue((prev) => prev + value); // 입력값 추가
  };

  const handleOperatorClick = (op) => {
    if (inputValue) {
      setResult(inputValue ? parseFloat(inputValue) : result); // 현재 값을 결과로 설정
      setInputValue(''); // 입력 초기화
      setOperator(op); // 연산자 저장
    }
  };

  const calculateResult = () => {
    if (inputValue && operator) {
      const current = parseFloat(inputValue);
      const prev = result;

      let newResult = 0;
      switch (operator) {
        case '+':
          newResult = prev + current;
          break;
        case '-':
          newResult = prev - current;
          break;
        case '*':
          newResult = prev * current;
          break;
        case '/':
          newResult = current !== 0 ? prev / current : 'Error';
          break;
        default:
          return;
      }

      setResult(newResult); // 결과 갱신
      setInputValue(''); // 입력값 초기화
      setOperator(null); // 연산자 초기화
    }
  };

  const clearAll = () => {
    setInputValue('');
    setResult(null);
    setOperator(null);
  };

  return (
    <div className="app">
      <h1>Calculator</h1>
      <Viewer inputValue={inputValue} result={result} />
      <Controller
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onCalculate={calculateResult}
        onClear={clearAll}
      />
    </div>
  );
 }
 
export default App2
