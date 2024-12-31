const Viewer = ({count})=>{
    return(
        <div>
            <p>현재 카운트 : </p>
            <h1>{count}</h1>
        </div>
    );
};

const Viewer2 = ({ inputValue, result }) => {
    return (
      <div className="viewer">
        <h2>{inputValue || result || '0'}</h2>
      </div>
    );
  };
export default Viewer;