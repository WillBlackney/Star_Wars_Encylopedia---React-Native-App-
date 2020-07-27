import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';


const ResultsList = ({title, results, navigation}) =>{
    return (
        <View style ={{flex: 1}}>
            <Text style = {styles.title}> {title}</Text>
            <FlatList
            data = {results}
            keyExtractor={(result)=> result.name}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress = {()=> navigation.navigate('ResultsShow', {name: item.url})}>
                    <ResultsDetail result = {item}/>
                    </TouchableOpacity>
                )
                
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default withNavigation(ResultsList);