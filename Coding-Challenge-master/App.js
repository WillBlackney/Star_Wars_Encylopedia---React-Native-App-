import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/Screens/HomeScreen";
import CharacterScreen from './src/Screens/CharacterScreen';
import ResultsShowScreen from './src/Screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Characters: CharacterScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Star Wars DB",      
    }
  }
);

export default createAppContainer(navigator);
