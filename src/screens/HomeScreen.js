import React , {Component} from 'react';

import styles from '../styles/Style';
import Entry from '../components/Entry';
import { View, FlatList,StyleSheet,Button, Text, Image, ImageBackground } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

class HomeScreen extends Component {
constructor () {
super();
this.state = {
entries: [],
};
this.toDetails = this.toDetails.bind(this);
this.handleDelete = this.handleDelete.bind(this);
}

handleDelete() {
    fetch('https://protected-spire-82809.herokuapp.com/delete',
    { method: 'DELETE'
    }).then(response =>  {this.props.navigation.navigate('Feed');
});
}

componentDidMount(){
fetch ('https://protected-spire-82809.herokuapp.com/entries').then(response => response.json()).then(jsonResponse => this.setState( { entries: jsonResponse}));
}
toDetails(item) {
 this.props.navigation.navigate('Details', item);
 }

componentWillReceiveProps() {
    this.componentDidMount();
}

render(){
return (
<View style ={styles.container} >
<ImageBackground source={require('../images/images.jpg')} style={styles.stretch} >

{this.state.entries.length == 0 ? <Image source={require('../images/no_data_found.png')}/>   :
<FlatList
data = {this.state.entries}
renderItem={({item}) => <Entry item={item} toDetails={this.toDetails} />}
keyExtractor = {item => item['_id']}
/>
}




</ImageBackground>
</View>


);

}
}

export default HomeScreen