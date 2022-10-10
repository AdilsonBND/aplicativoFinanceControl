import { entries } from "lodash";
import React from "react";
import {Alert, View, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import Colors from "../../../styles/Colors";


const NewEntryDeleteAction = ({onOkPress, entry}) => {



   

    const onDelete = () => {
        if(entry.category.isInit){
            Alert.alert('Não é possível apagar saldo inicial, mas você pode alterá-lo')
        } else{

            Alert.alert(
                'Apagar ?',
                'Você deseja realmente apagar este lançamento?',
                [
                    {text: 'Não', style: 'cancel'},
                    {text: 'Sim', onPress: () => onOkPress()}
                ],
                {cancelable: false}
            )
        }
    }
    return (
        entry.id && (
        <View>
            <TouchableOpacity style={styles.button} onPress={onDelete}>
                <Icon name="delete" size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>
        )
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.red,
        width: 59,
        height: 59,
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
})

export default NewEntryDeleteAction