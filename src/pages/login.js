import React, {Component} from 'React';
import {View, Text} from 'react-native';

export default class Main extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>This is the login page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });