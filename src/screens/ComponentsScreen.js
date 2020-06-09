import Reac from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    return <Text style={style.textStyle}>This is the components screen</Text>
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})