import React, { Component } from'react';
import styles from '../styles/Style';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';



class Form extends Component {
constructor () {
super();
this.state = {
entries: [],
};
}
render()
{
return (
<View style={styles.container} >
<Text>Title:</Text>
<TextInput
style={[styles.border, {height: 80}]}
value={this.state.title}
onChangeText={(title) => this.setState({ title: title })}
/>

<Text>Post:</Text>
<TextInput
style={[styles.border, {height: 200}]}
value={this.state.post}
onChangeText={(post) => this.setState({ post: post })}
/>
</View>

)
}
}

export default Form;