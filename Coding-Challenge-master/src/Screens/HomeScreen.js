import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
  <View>
      <Text style={styles.textStyle}>Star Wars Character DB Service!</Text>
      <Button 
        onPress={() => navigation.navigate('Characters')}  
        title ="View all characters"
     />
     
  </View> 
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },

  buttonStyle: {
    width: 30,
  },
});

export default HomeScreen;