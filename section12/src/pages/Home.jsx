// import Header from '../components/Header'
// import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import { DiaryStateContext } from '../App';
import { useContext, useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';

const getMonthlyData = (pivotDate, data) => { 
    //이번달 시작되는 시점과 끝나는 시점사이에 들어오는것만 필터링 
    const beginTime = new Date( pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0 ).getTime(); 
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59 ).getTime(); 
    return data.filter( (item) => beginTime <= item.createdDate && item.createdDate <= endTime 
    ); 
  }; 

const Home = ()=>{
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date);

    //이번달에 시작되는 시점과 끝점 데이터를 목업데이타 필터링해야된다.
    const monthlyDate =  getMonthlyData(pivotDate, data);

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth-1))
    };
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth+1))
    };
    return (
        <>
            <Header left={<Button onClick={onDecreaseMonth} text={'<'}/>}/>
           
             <DiaryList data={getMonthlyData} />
        </>
    )
};

export default Home;