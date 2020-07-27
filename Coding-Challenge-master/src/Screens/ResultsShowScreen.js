import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, FlatList} from "react-native";
import axios from "axios";

const ResultsShowScreen = ({navigation}) => {

    const[result, setResult] = useState(null);
    const url = navigation.getParam('name');

    console.log('url is '+ url);
    console.log('result is' + result);

    const getResult = async (url) => {
        const response = await axios.get(url);
        setResult(response.data);
    };

    useEffect(()=>{
        getResult(url);
    }, []);

    if(!result){
        console.log('Result was null...');
        return null;
    }
    else{
        console.log('Result was NOT null...')
    }

    var movieObjects = [];
    console.log(movieObjects.length);


    return(
        <View>
            <Text style = {styles.nameStyle}>{result.name}</Text>
            <Text style = {styles.subHeaderStyle}>Movies where i made an appearance</Text>
            <FlatList
                data = {result.films}
                keyExtractor={(film) => film}              
                
                renderItem={( {item} ) =>{
                    return <Text>{item}</Text>
                }}
                
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    nameStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },

    subHeaderStyle: {
        fontWeight: 'bold',
        marginBottom: 10
    },    
});

export default ResultsShowScreen;