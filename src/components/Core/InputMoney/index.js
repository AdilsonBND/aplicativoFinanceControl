import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, TextInput } from "react-native";
import Colors from "../../../styles/Colors";
import Icon from 'react-native-vector-icons/dist/MaterialIcons'



const InputMoney = ({ value, onChangeValue, onChangeDebit }) => {


    const [debit, setDebit] = useState(value < 0 ? -1 : 1)
    const [debitPrefix, setDebitPrefix] = useState(value < 0 ? '-' : '')



    const onChangeDebitCredit = () => {
        if (debit < 0) {
            setDebit(1);
            setDebitPrefix('')
            onChangeDebit && onChangeDebit(false)



        } else {
            setDebit(-1)
            setDebitPrefix('-')
            onChangeDebit && onChangeDebit(true)

        }
        onChangeValue(value * -1)
    }



    return (
        <View style={styles.container}>
            <Text style={styles.inputText}>Clique aqui para definir Débito ou Crédito</Text>
            <Icon name="arrow-drop-down" size={30} style={styles.iconStyle}></Icon>
            <View style={styles.inputBox}>
                <TouchableOpacity style={styles.debitButton} onPress={onChangeDebitCredit}>
                    <Text style={styles.debitButtonPrefix}>{debitPrefix}</Text>

                    <Text style={styles.debitButtonText}>R$</Text>


                </TouchableOpacity>



                <TextInput
                    style={styles.input}

                    keyboardType="numeric"

                    value={value}

                    onChangeText={(text) => {
                        onChangeValue(text.replace(',', '.') * debit)

                    }}
                ></TextInput>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical: 10,

    },
    input: {
        flex: 1,
        fontSize: 28,
        color: Colors.white,
        textAlign: 'right',
        paddingLeft: 0,
        paddingRight: 20,

    },
    debitButton: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    debitButtonPrefix: {
        fontSize: 28,
        color: Colors.white,
        minWidth: 8,
    },
    debitButtonText: {
        fontSize: 28,
        color: Colors.white,
    },
    inputText: {
        marginLeft: 20,
        paddingTop: 10,
        color: Colors.white

    },
    inputBox: {
        flexDirection: 'row',

    },
    iconStyle: {
        marginLeft: 25,
        marginBottom: -20,
        color: Colors.white
    }

})

export default InputMoney