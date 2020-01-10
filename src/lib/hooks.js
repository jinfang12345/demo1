import { useState, useEffect } from 'react';
export function useRequestData(url, depth){
    const [data, setData] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url).then(async (response) => {
            const data = await response.json();
            setData(JSON.stringify(data));
            setLoading(false);
        })
        return () => {
            setData(null);
            setLoading(true);
        }
    },[depth]);
    return { data, loading };
}