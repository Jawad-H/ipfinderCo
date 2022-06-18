import { React, useState, useEffect } from 'react';
import ipRegex from 'ip-regex';
import axios from "axios";

function useFetch(url, input) {
    // const [input, setInput] = useState('');
    const [datas, setData] = useState([]);
    const [error, setError] = useState(false);

    const fetchUrl = async (url) => {
        const response = await axios.get(url);
        if (response.status && response.data.error) {
            setError(true);
        }
        else {
            setError(false);
            setData(response.data)
        }
    }
    useEffect(() => {
        setData([]);
        if (ipRegex().test(input)) {
            fetchUrl(url);
        }
        return
    }, [input])
    return [datas, error]
}

export default useFetch;