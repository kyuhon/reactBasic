import { useState, useRef } from "react";


const Register = ()=> {
    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        bio: '',
    });
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState('');
    const [country, setCountry] = useState('');
    const [bio, setBio] = useState('');



    const onChangeName = (e)=>{
        // console.log(e.target.value);
        setName(e.target.value);
    };

    const onChangeBirth = (e)=>{
        console.log(e.target.value);
        setBirth(e.target.value);
    };
    const onChangeCountry = (e)=>{
        setCountry(e.target.value);
    };
    const onChangeBio = (e)=>{
        setBio(e.target.value);
    };

    return (
    <>  
       <div>
            <input value={name} onChange={onChangeName} type="text" placeholder="이름"/>
       </div>
       <div>
            <input value={birth} type="date" onChange={onChangeBirth}/>
       </div>
       <div>
            <select value={country} onChange={onChangeCountry}>
                <option value=""></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
       </div>
       <div>
            <textarea value={bio} onChange={onChangeBio}></textarea>
       </div>
    </> 
    );
}

const Register2 = ()=> {
    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        bio: '',
    });
    //const [name, setName] = useState("이름");
    //const [birth, setBirth] = useState('');
    //const [country, setCountry] = useState('');
    //const [bio, setBio] = useState('');



    // const onChangeName = (e)=>{
    //     console.log(e);
    //     setInput({...input, name: e.target.value});
    //     //전개연산자 기능
    // };
    // const onChangeBirth = (e)=>{
    //     setInput({...input, birth: e.target.value});
    // };
    // const onChangeCountry = (e)=>{
    //     setInput({...input, country: e.target.value});
    // };
    // const onChangeBio = (e)=>{
    //     setInput({...input, bio: e.target.value});
    // };

    let onChange = function(e){
        console.log({...input, [e.target.name]:e.target.value});
        setInput({...input, [e.target.name]:e.target.value});
    };

    return (
    <>  
       <div>
            <input value={input.name} name="name" onChange={onChange} type="text" placeholder="이름"/>
       </div>
       <div>
            <input value={input.birth} name="birth" type="date" onChange={onChange}/>
       </div>
       <div>
            <select value={input.country} name="country" onChange={onChange}>
                <option value=""></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
       </div>
       <div>
            <textarea value={input.bio} name="bio" onChange={onChange}></textarea>
       </div>
    </> 
    );

}

const Register3 = ()=> {
    const countRef = useRef(0);
    const inputRef = useRef();
    const [input, setInput] = useState({
        name: '이름',
        birth: '',
        country: '',
        bio: '',
    });

    let onChange = function(e){
        countRef.current++;
        console.log({...input, [e.target.name]:e.target.value});
        setInput({...input, [e.target.name]:e.target.value});
    };
    //전송을할때 점검(패턴검색)
    const onSubmit = ()=>{
        if(input.name === ''){
            alert("name 값이 없어요");
            inputRef.current.focus();
            console.log(inputRef);
        }
    };


    return (
    <>  
       <div>
            <input ref={inputRef} value={input.name} name="name" onChange={onChange} type="text" placeholder="이름"/>
       </div>
       <div>
            <input value={input.birth} name="birth" type="date" onChange={onChange}/>
       </div>
       <div>
            <select value={input.country} name="country" onChange={onChange}>
                <option value=""></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
       </div>
       <div>
            <textarea value={input.bio} name="bio" onChange={onChange}></textarea>
       </div>
       <button onClick={onSubmit}>전송</button>
    </> 
    );
    
}
export default Register3;