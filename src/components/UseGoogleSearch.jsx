import React from 'react';
import API_KEY from './Keys';
import { useState, useEffect } from 'react';

const CONTEXT_KEY = "758720da340ee4e8b"
    
const UseGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then((response) => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData()
    }, [term])
    return {data}
}

export default UseGoogleSearch;