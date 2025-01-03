import { useParams, useNavigate } from "react-router-dom"; 
import Header from "../components/Header"; 
import Button from "../components/Button"; 
import Viewer from "../components/Viewer"; 
 
const Diary = () => { 
  const params = useParams(); 
 
  return ( 
    <div> 
      <Header 
        title={"yyyy-mm-dd 기록"} 
        left={ <Button text={"< 뒤로가기"} /> } 
        right={ <Button text={"수정하기"} /> } 
      /> 
      <Viewer /> 
    </div> 
  ); 
}; 
 
export default Diary; 