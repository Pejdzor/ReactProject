import React, {useState,useEffect}from 'react';
import InputComponent from "./Input";
import '../styles/stylelogin.scss'

const LoginComponent = () => {
    const [data,setData] = useState({login:"",password:""})
    useEffect(()=>{
        console.log("Zmieniło się na "+JSON.stringify(data))
    },[data])
    return (
        <div className={"login"}>
            <div className={'loginform'}>
                <label>Login: <InputComponent type="text" field="login" setData={setData} data={data} /></label>
                <label>Password: <InputComponent type="password" field="password" setData={setData} data={data} /></label>
                <button>LOG IN</button>
            </div>

        </div>
    );
};

export default LoginComponent;