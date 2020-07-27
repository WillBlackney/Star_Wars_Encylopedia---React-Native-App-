import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Card from './Card';

const ResultsDetail = ({result, props}) => {
    return(
        <Card>           
            <Text style = {styles.name}>{result.name}</Text>
            <Text>Height: {result.height}</Text>
            <Text>Weight: {result.mass}</Text>
            <Text>Hair Color: {result.hair_color}</Text>
            <Text>Birth Year: {result.birth_year}</Text>
        </Card>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },

    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    container: {
        marginLeft: 10
    }
});

export default ResultsDetail;