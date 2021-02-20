import React , {Component} from 'react';

import styles from '../styles/Style';
import Entry from '../components/Entry';
import { View, FlatList,StyleSheet,Button } from 'react-native';

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

<FlatList
data = {this.state.entries}
renderItem={({item}) => <Entry item={item} toDetails={this.toDetails} />}
keyExtractor = {item => item['_id']}
/>
<Button title="DELETE" onPress={() => this.handleDelete()}/>


</View>

);

}
}

export default HomeScreen