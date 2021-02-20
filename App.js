import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import TabScreen from './src/screens/TabScreen';
import Icon from 'react-native-vector-icons';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import DetailsScreen from './src/screens/DetailsScreen'

import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles from './src/styles/Style'
class App extends React.Component {
    render() {
        return (
            <MainScreenNavigator
                onNavigationStateChange={() => this.setState({})}
                screenProps={this.state}
            />
        )
    }
}

const StackScreen = createStackNavigator({
Home: {
    screen: HomeScreen,
    navigationOptions: {
    title: 'Feed'
    }
},
Details: {
    screen: DetailsScreen,

      navigationOptions: ( {navigation}) => ({title: navigation.state.params.title,})

}
});

const MainScreenNavigator = createAppContainer(createBottomTabNavigator ({

Home: {
screen: StackScreen,

navigationOptions: {

tabBarIcon: ( {focused, tintColor} ) => (
    <FontAwesome name= 'windows' color = {tintColor} size = {25} />
),
},
},

Post: {
screen: TabScreen,
navigationOptions: {

tabBarIcon: ( { focused , tintColor} ) => (
    <FontAwesome name = 'apple' color = {tintColor} size = {25}  />
),

},
},

}));

export default App;