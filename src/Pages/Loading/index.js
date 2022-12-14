import React from "react";
import { View, StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import Colors from '../../styles/Colors'




const Loading = () => {





    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={Colors.background} />
            <ActivityIndicator color={Colors.violet} size={60}></ActivityIndicator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center'

    }
})

export default Loading