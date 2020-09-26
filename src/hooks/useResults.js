import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    
    const searchApi =  async (searchTerm) => {
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses)
        }catch(err){
            setErrMessage('Something went wrong');
        }
    };

    //chama a api apenas 1 vez, pra ficar de pesquisa default
    useEffect(() => {
        searchApi('restaurant')              
    }, []);

    return [searchApi, results, errMessage];
};