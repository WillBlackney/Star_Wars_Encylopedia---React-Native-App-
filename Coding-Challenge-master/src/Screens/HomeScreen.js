import React from "react";
import { Text, StyleSheet, View, Button, Image,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
  <View>
       <Image source={require("../../assets/space_bg.jpg")} 
       style={styles.backgroundImageStyle} 
       />
      <Text style={styles.textStyle}>Star Wars Character DB Service!</Text>
      <View style ={styles.buttonStyle}>
        <Button 
          onPress={() => navigation.navigate('Characters')}  
          title ="View all characters"
        />
      </View>   
    
     
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
    width: "90%", 
    height: "200%",
    margin: 20, 
    marginTop: 200,
    alignItems: 'center',
  },

  backgroundImageStyle:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
},
});

export default HomeScreen;