import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import Colors from "../../../styles/Colors"
import Currency from "../../Core/Currency"


const BalancePanelLabel = ({currentBalance}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>
            <Text style={styles.value}><Currency value={currentBalance}/></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        
        alignItems: 'center'
    },
    label: {
        fontSize: 14,
        color: Colors.white,
    },
    value: {
        fontSize: 26,
        color: Colors.white,
    }

})

export default BalancePanelLabel