import React, {useState} from "react"
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'

import LinearGradient from "react-native-linear-gradient"
import Colors from '../../styles/Colors'

import BalancePanelChart from "./BalancePanelChart"
import BalancePanelLabel from "./BalancePanelLabel"
import useBalance from "../../hooks/useBalance"

import Icon from "react-native-vector-icons/dist/MaterialIcons"



const BalancePanel = ({onNewEntryPress}) => {

    
    const [balance] = useBalance()

    

    return (

        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={Colors.blueDark} />
        <LinearGradient colors={[Colors.blueDark, Colors.asphalt]} style={styles.panel}>
            <BalancePanelLabel currentBalance={balance}></BalancePanelLabel>
            <BalancePanelChart></BalancePanelChart>
            </LinearGradient>
        <TouchableOpacity style={styles.button}
        onPress={() => {onNewEntryPress()}}>
            <Icon name="add" size={30} color={Colors.white} />
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       
        marginBottom: -23
    },
    panel: {
      
        paddingVertical: 0,
    
    },
    button: {
        backgroundColor: Colors.blueDark,
        borderRadius: 150,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        marginTop: -22,
        marginRight: 10,
        shadowColor: Colors.black,
        elevation: 5,
        zIndex: 1,

    }


})

export default BalancePanel