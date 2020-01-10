import React, { useState, useEffect } from 'react';
import {
    Checkbox
} from "antd";
import testImg from '../../assets/test3.jpg';

export default function Example () {
    console.log('44444');
    const [count, setCount] = useState(() => ({ time: 4 }));
    const [age, setAge] = useState(new Date());
    const [checked, setCheck] = useState(true);
    const [indeterminate, setIndeterminate] = useState(false);
    const [preChecked, setPreChecked] = useState(true);
    const clickHandle =  (count) => {
        setCount({ time: count.time+1 });
        setAge(age+1);
    };
    useEffect(() => {
       setCount(8);
        setPreChecked(checked);
    });

    const checkboxChange = (event) => {
        if(indeterminate === false && preChecked ===false){
            setIndeterminate(true);
            setCheck(false);
        } else if(preChecked === true) {
            setCheck(false);
            setIndeterminate(false);
        } else if(preChecked === false && indeterminate === false) {
            setCheck(false);
            setIndeterminate(true);
        } else if(indeterminate === true){
            setCheck(true);
            setIndeterminate(false);
        }
    };

    return (
        <div>
            <Checkbox
             onChange={checkboxChange}
             checked={checked}
             indeterminate={indeterminate}
            />
            <img src={testImg} />
        </div>

    )
}