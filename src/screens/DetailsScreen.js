import React, { Component } from'react';
import styles from '../styles/Style';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';



class DetailsScreen extends Component {
render()
{
return (
<ImageBackground source={require('../images/gradient.jpg')} style={styles.stretch} >
<View style={styles.border} >
<Text> {this.props.navigation.state.params.post} </Text>


</View>
</ImageBackground>
)
}
}

export default DetailsScreen;