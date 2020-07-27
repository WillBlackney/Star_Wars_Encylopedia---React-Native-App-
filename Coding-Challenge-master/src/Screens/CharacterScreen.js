import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';
import UseResults from '../Hooks/UseResults';
import ResultsList from '../Components/ResultsList';

const CharacterScreen = () =>{

    const[term, setTerm] = useState('');
    const[searchApi, results, errorMessage] = UseResults();

    const filterResultsByFirstInitial = (firstChar) => {
        if(firstChar == ''){
            return results;
        }
        return results.filter(result =>{
            return result.name.charAt(0) === firstChar;
        });
    };

    return(
        <View>
            <SearchBar
                term = {term}
                onTermChange = {setTerm}
                onTermSubmit = {() => searchApi(term)}
            />
             {errorMessage ? <Text>{errorMessage}</Text>: null}
             <ScrollView>
                 <Text style ={styles.headerStyle}>
                 All Characters
                 </Text>
             <ResultsList 
                results={filterResultsByFirstInitial('')} 
                />
             
             </ScrollView>
        </View>
    );   

};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 20,
    },
    headerStyle:{
        fontSize: 30,
        justifyContent: 'center', 
        alignItems: 'center' 
    }

});



export default CharacterScreen;