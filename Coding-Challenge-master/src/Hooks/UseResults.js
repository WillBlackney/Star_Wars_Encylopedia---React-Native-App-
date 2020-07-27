import {useEffect, useState} from 'react';
import StarWars from '../api/StarWars';

export default () =>{
    const[results, setResults] = useState([]);
    const[errorMessage, setErrorMessage] = useState('');

    const searchApi = async searchTerm =>{
        console.log('searchApi called...');
        try
        {
        const response = await StarWars.get('',{
            params: {
                limit: 50,
                term: searchTerm                
            }
        });
        setResults(response.data.results);
        console.log('searchApi returned: ' + response.data.results);
        } 

        catch(err)
        {
            setErrorMessage('Something went wrong!');
        }
    };

    useEffect(() => {
        searchApi('')
    }, []);

    return[searchApi, results, errorMessage];

};