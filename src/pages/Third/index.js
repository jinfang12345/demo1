import React, { useState } from 'react';
import { useRequestData } from '../../lib/hooks';
import './index.scss';
import { Spin, Button } from "antd";
import { logs } from '../../lib/utils';
export default function Third(props){
    // const { data, loading } = useRequestData('http://localhost:10087/api');
    const [query, setQuery] = useState(false);
    const { data, loading } = useRequestData('http://localhost:10087/api', query);
    const content = loading ? <Spin spinning /> : (
        <div>
            <span>{`请求接口数据:${data}`}</span>
        </div>
    );
    const fetchData = () => {
        setQuery(!query);
    };
    logs([1,2,3]);
    return (
        <div>
            <Button type='primary' onClick={fetchData}>請求</Button>
            {content}
        </div>
    )
}