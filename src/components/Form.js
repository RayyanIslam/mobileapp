import React, { Component } from'react';
import styles from '../styles/Style';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";



class Form extends Component {
constructor() {
super();
this.state = {
    title: "", post: "",
};
}


handleSubmit() {
    this.props.submit(this.state.title, this.state.post);
    this.setState({title: "",post: ""});
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

<FontAwesome name= 'paper-plane' color = 'blue' size = {50} onPress={() => this.handleSubmit()}/>
</View>

)
}
}

export default Form;