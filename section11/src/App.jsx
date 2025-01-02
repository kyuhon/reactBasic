import './App.css'
import Header from './components/Header'
import List from './components/List'
import Editer from './components/Editer'
import Exam from './components/exam'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'

//가상의 데이터(마운트 : 서버에서 데이터를 가져온다.(Ajax json))
//목업(Mock-up): 아이디어나 제품의 초기 개념을 실물과 비슷하게 시제품으로 제작하는 작업과 결과물

const mockData = [
  {
    id: 0,
    isDone: false,
    content: '리액트공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '스프링부트공부하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '자바공부하기',
    date: new Date().getTime(),
  },
];

const mockData2 = [
  {
    id: 0,
    idDone: false,
    content:'',
    date: new Date().getTime(),
  }
]

function reducer(state, action){
  switch(action.type){
    case "INSERT": return [action.data, ...state];
    case "UPDATE": return state.map((item)=>
      item.id === action.data ? {...item, isDone: !item.isDone} : item);
    case "DELETE": return state.filter((item)=>{
      return item.id !== action.data
    });
    default: return state;
  }
}

//createContext() => Session session = request.getSession();
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  //const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);

  //todos 추가할 레코드 처리하는 핸들러함수
  
  // const onInsert = (data)=>{
  //   dispatch({
  //     type: "INSERT",
  //     data: {
  //       id: idRef.current++,
  //       isDone: false,
  //       content: data,
  //       date: new Date().getTime(),
  //     }
  //   });
    
  // };

  //useEffect useCallback 해당되는 콜백함수를 마운트할 때 딱 한번 실행
  const onInsert = useCallback((data)=>{
    dispatch({
      type: "INSERT",
      data: {
        id: idRef.current++,
        isDone: false,
        content: data,
        date: new Date().getTime(),
      }
    });
  },[]);

  //todos 수정할 레코드 처리하는 핸들러함수
  
  // const onUpdate = (targetId)=>{
  //   dispatch({
  //     type: "UPDATE",
  //     data: targetId,
  //   });
    
  // };

  const onUpdate = useCallback((targetId)=>{
    dispatch({
      type: "UPDATE",
      data: targetId,
    });
  },[]);

  //todos 삭제할 레코드 처리하는 핸들러 함수
  
  // const onDelete = (targetId)=>{
  //   dispatch({
  //     type: "DELETE",
  //     data: targetId,
  //   });

  // };

  const onDelete = useCallback((targetId)=>{
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  },[]);

  //TodoDispatchContext.Provider 위한 useMemo() 만들어야된다
  const memoizedDispatch = useMemo(()=>{
    return {onInsert, onUpdate, onDelete};
  },[]);

  return (
    <div className='app'>
     <Exam />
     <Header />
     <TodoStateContext.Provider value={todos}> 
      <TodoDispatchContext.Provider value={memoizedDispatch}>
      <Editer />
      <List />
      </TodoDispatchContext.Provider>
     </TodoStateContext.Provider>
    </div>
  )
}

export default App
