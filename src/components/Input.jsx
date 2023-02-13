import React from 'react';

const InputComponent = ({data,field,setData,type,...props}) => {
    return (
        <div className={'oneinput'}>
            <input type={type}
                    value={data[field]}
                    onChange={(event)=> {
                        setData((prev)=>{
                            let obj={...prev};
                            obj[field]=event.target.value;
                            return obj;
                        }
                        )
                   }}
            />
        </div>
    );
};

export default InputComponent;
