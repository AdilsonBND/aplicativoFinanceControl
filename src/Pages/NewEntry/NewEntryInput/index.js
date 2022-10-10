import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native'



import Colors from "../../../styles/Colors";

const NewEntryInput = ({value, onChangeValue, onChangeDebit} ) => {


    const [debit, setDebit] = useState(value < 0 ? -1 : 1)
    const [debitPrefix, setDebitPrefix] = useState(value < 0 ? '-' : '')

    

    const onChangeDebitCredit = () => {
        if(debit < 0){
            setDebit(1);
            setDebitPrefix('')
            onChangeDebit(false)
            
        
            
        } else {
            setDebit(-1)
            setDebitPrefix('-')
            onChangeDebit(true)
            
        }
        onChangeValue(value * -1)
    }
    
    const valueFormat = () => {
        if(value < 0){
            return value.replace('-','')
        }else{
            return value
        }
    }
  

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.debitButton} onPress={onChangeDebitCredit}>
            <Text style={styles.debitButtonPrefix}>{debitPrefix}</Text>
                <Text style={styles.debitButtonText}>R$</Text>
            </TouchableOpacity>

            <TextInput
            style={styles.input}
           clearButtonMode="always"
            keyboardType="numeric"
            
            value={valueFormat}
            
            onChangeText={(text) => {
                onChangeValue(text.replace(',','.')  * debit )
                
            }}></TextInput> 


           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical: 10,

    },
    input:{
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
})

export default NewEntryInput