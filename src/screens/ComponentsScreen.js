import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>Hi, there!</Text>
    return (<View>
        <Text style={style.textStyle}>This is the components screen</Text>
        {greeting}
        </View>);
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen;