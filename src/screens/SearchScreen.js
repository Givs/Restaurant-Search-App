import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter( result =>{
            return result.price === price;    
        });
    };

    return(
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
                />
        
        { errMessage ? <Text>{errMessage}</Text> : null}
        
        <ScrollView>
            <ResultsList 
            results={filterResultsByPrice('$')} 
            title="Cost Effective"
            />
            
            <ResultsList 
            results={filterResultsByPrice('$$')} 
            title="Bit Pricer"  
            />
            
            <ResultsList 
            results={filterResultsByPrice('$$$')} 
            title="Big Spender"
            />
            
            <ResultsList 
            results={filterResultsByPrice('$$$$')} 
            title="Big Bigger"
            />
        </ScrollView>



        </>
      
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;