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
            <div>
                <div className={'loginform'}>
                    <div className={"holder"}>
                        <p>Login: </p>
                        <p>Password: </p>
                    </div>
                    <div className={"holder"}>
                        <InputComponent type="text" field="login" setData={setData} data={data} />
                        <InputComponent type="password" field="password" setData={setData} data={data} />
                    </div>

                </div>
                <button>LOG IN</button>
            </div>

        </div>
    );
};

export default LoginComponent;