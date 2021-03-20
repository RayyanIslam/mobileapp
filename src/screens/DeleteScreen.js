import React , {Component} from 'react';

import styles from '../styles/Style';
import Entry from '../components/Entry';
import { View, FlatList,StyleSheet,Button, Image, ImageBackground, TouchableOpacity, TouchableHighlight} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";


class DeleteScreen extends Component {

handleDelete() {
    fetch('https://protected-spire-82809.herokuapp.com/delete',
    { method: 'DELETE'
    }).then(response =>  {this.props.navigation.navigate('Feed');
});
}


render(){
return (

<View style ={styles.container} >
<ImageBackground source={require('../images/whiteGradient.jpg')} style={styles.stretch} >

<Image source={require('../images/54-545269_sesame-street-on-twitter-oscar-the-grouch-party.png')} style={styles.fifty}  />

<FontAwesome name= 'remove' color = 'red' size = {100} onPress={() => this.handleDelete()}/>
</ImageBackground>
</View>


);

}
}

export default DeleteScreen