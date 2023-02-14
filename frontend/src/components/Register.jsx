import React from 'react';
import {useState,useEffect} from "react";
import "../styles/styleregister.scss"
import InputComponent from "./Input";
const RegisterComponent = () => {
    const [data,setData] = useState({email:"",login:"",password:"",confirm:""})
    useEffect(()=>{
        console.log("Obecne wartości: "+data);
    },[data])
    return (
        <div className={"register"}>
            <div>
                <div className={"registerform"}>
                    <div className={"holder"}>
                        <p>E-mail:</p>
                        <p>Login:</p>
                        <p>Password:</p>
                        <p>Confirm password:</p>
                    </div>
                    <div className={"holder"}>
                        <InputComponent type={"email"} field={"email"} data={data} setData={setData} />
                        <InputComponent type={"text"} field={"login"} data={data} setData={setData} />
                        <InputComponent type={"password"} field={"password"} data={data} setData={setData} />
                        <InputComponent type={"password"} field={"confirm"} data={data} setData={setData} />
                    </div>


                </div><button>REGISTER</button>
            </div>

        </div>
    );
};

export default RegisterComponent;
