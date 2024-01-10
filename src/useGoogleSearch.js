import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "00556f073ed1b4523";


// creating a custom hook inside the useGoogleSearch
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    // here we are gonna async function 

    useEffect(() => {
        const fetchData = async () => {
            fetch(

                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(response => response.json())
                .then(result => {
                    setData(result)
                })
        }

        fetchData();

    }, [term])

    return { data }
};

// here term is a data layer variable what we search 
export default useGoogleSearch;


// here the above link is use to pull information from the data layer


/* so basicaaly when we write something on the search bar it goes to data layer and pull 
information from the data layer and using the hook custom search API we are able to connect 
to the API*/ 