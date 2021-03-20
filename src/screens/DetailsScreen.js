import React, { Component } from'react';
import styles from '../styles/Style';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';



class DetailsScreen extends Component {
render()
{
return (
<ImageBackground source={require('../images/gradient.jpg')} style={styles.stretch} >
<View margin={75} >
<Text style={styles.title}> {'Submitted at'} </Text>
<Text style={styles.title}> {this.props.navigation.state.params.time} </Text>
<Text style={styles.title}> {this.props.navigation.state.params.date} </Text>
</View>
<View style={styles.border} >
<Text> {this.props.navigation.state.params.post} </Text>
</View>

</ImageBackground>
)
}
}

export default DetailsScreen;