import React , {Component} from 'react';

import styles from '../styles/Style';
import Form from '../components/Form';
import { View, FlatList,StyleSheet,Button } from 'react-native';

class TabScreen extends Component {
constructor() {
super();
this.submit = this.submit.bind(this);
}
submit(title, post) {
    if (title && post) {
        fetch('https://protected-spire-82809.herokuapp.com/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'title=' + title + '&post=' + post
        }).then(response => {
            this.props.navigation.navigate('Feed');
        });
    }
}



render()
{
return (
<View style = {styles.container}>
<Form submit={this.submit} />
</View>
)
}
}

export default TabScreen;