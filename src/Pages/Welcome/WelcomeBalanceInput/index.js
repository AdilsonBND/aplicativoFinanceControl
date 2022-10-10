import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../../styles/Colors";
import InputMoney from "../../../components/Core/InputMoney";

const WelcomeBalanceInput = ({value, onChangeValue, onChangeDebit}) => {
    return (
        <View>
            <Text style={styles.label}>Informe seu saldo: </Text>
            <InputMoney value={value} onChangeDebit={onChangeDebit} onChangeValue={onChangeValue}></InputMoney>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: Colors.white,
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 20,

    }
})

export default WelcomeBalanceInput