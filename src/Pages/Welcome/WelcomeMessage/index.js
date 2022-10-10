import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../../styles/Colors";

const WelcomeMessage = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Olá</Text>
            <Text style={styles.message}>Para iniciar o uso é necessário informar o saldo atual</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        color: Colors.white,
        fontSize: 28,
        textAlign: 'center',
        marginTop: 20,
    },
    message: {
        color: Colors.white,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 40,
    }
})

export default WelcomeMessage