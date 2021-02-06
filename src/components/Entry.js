import React,{Component} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from '../styles/Style'
class Entry extends Component {
render() {
return (
    <View  style={styles.border}>
    <Button
    title={this.props.item.title}
    onPress={() => this.props.toDetails(this.props.item)}
    />
    </View>
);
}
}


export default Entry;