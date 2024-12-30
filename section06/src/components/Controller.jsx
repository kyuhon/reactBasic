import './controller.css'

const Controller = ({onClickButton})=>{
    
    const onClickValue = (e)=>{
        onClickButton(Number(e.target.value))
    };

    return(
       
        <div>
            <button onClick={onClickValue} value="-1">-1</button>
            <button onClick={onClickValue} value="-10">-10</button>
            <button onClick={onClickValue} value="-100">-100</button>
            <button onClick={onClickValue} value="100">100</button>
            <button onClick={onClickValue} value="10">10</button>
            <button onClick={onClickValue} value="1">1</button>
        </div>
    );
};

const Controller2 = ({ onNumberClick, onOperatorClick, onCalculate, onClear }) => {
    return (
      <div className="controller">
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => onNumberClick(num.toString())}>
              {num}
            </button>
          ))}
        </div>
        <div className="operators">
          {['+', '-', '*', '/'].map((op) => (
            <button key={op} onClick={() => onOperatorClick(op)}>
              {op}
            </button>
          ))}
          <button onClick={onCalculate}>=</button>
          <button onClick={onClear}>C</button>
        </div>
      </div>
    );
  };

export default Controller2;