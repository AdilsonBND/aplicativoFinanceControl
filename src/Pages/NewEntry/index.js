import React from "react"
import { View, StyleSheet, StatusBar } from 'react-native'
import BalanceLabel from '../../components/BalanceLabel'
import { useState } from 'react'
import Colors from "../../styles/Colors"
import NewEntryInput from "./NewEntryInput"
import NewEntryCategoryPicker from "./NewEntryCategoryPicker"
import NewEntryDatePicker from './NewEntryDatePicker'
import NewEntryDeleteAction from './NewEntryDeleteAction'
import ActionFooter, { ActionPrimaryButton, ActionSecondaryButton } from "../../components/Core/ActionFooter"
import useEntries from '../../hooks/useEntries'
import NewEntryAdressPicker from "./NewEntryAdressPicker"
import NewEntryCameraPicker from "./NewEntryCameraPicker"




const NewEntry = ({ route, navigation }) => {





    const entry = route.params?.entry ? route.params.entry : {
        id: null,
        category: { id: null, name: 'Selecione' },
        amount: '',
        // entryAt: new Date(),
        address: '',
        latitude: null,
        longitude: null,
        photo: null,
    }

    const isEdit = route.params?.isEdit ? route.params.isEdit : false

    // const entry = navigation.getParam('entry', {
    //     id: null,
    //     amount: 0,
    //     entryAt: new Date(),

    // })



    // const { entry } = route.params


    
    const [, addEntry,updateEntry, deleteEntry] = useEntries()


    const [amount, setAmount] = useState(`${entry.amount}`)
    const [category, setCategory] = useState(entry.category)
    const [debit, setDebit] = useState(
        entry.amount < 0 ? true : false
    )
    const [entryAt, setEntryAt] = useState(
        entry.entryAt ? entry.entryAt.toDate() : new Date()
    )
    const [address, setAddress] = useState(entry.address)
    const [photo, setPhoto] = useState(entry.photo)
    const [latitude, setLatitude] = useState(entry.latitude)
    const [longitude, setLongitude] = useState(entry.longitude)

        // console.log(entryAt)

    const isValid = () => {
        if (parseFloat(amount) !== 0 && category.name != 'Selecione') {
            return true
        }
        return false
    }



    const save = () => {

        const data = {
            id: entry.id,
            amount: parseFloat(amount),
            entryAt: entryAt,
            category: category,
            address: address,
            latitude: latitude,
            longitude: longitude,
            photo: photo



        }
        // console.log(photo)
        isEdit ? updateEntry(data) : addEntry(data)
        goBack()

    }

    const remove = () => {
        deleteEntry(entry)
        goBack()
    }

    const goBack = () => {

        navigation.goBack()
    }


    // console.log(entry.category.isInit)

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={Colors.background} />

            <BalanceLabel></BalanceLabel>

            <View style={styles.formContainer}>
                <NewEntryInput value={amount} onChangeDebit={setDebit} onChangeValue={setAmount}></NewEntryInput>

                {/* <TextInput style={styles.input}
                onChangeText={(text) => setAmount(text)}
                value={amount}
                ></TextInput> */}

                

                <NewEntryCategoryPicker debit={debit} category={category} onChangeCategory={setCategory}  entry={entry}/>
                


                <View style={styles.formActionContainer}>

                    <NewEntryDatePicker value={entryAt} onChange={setEntryAt}></NewEntryDatePicker>
                    <NewEntryCameraPicker photo={photo} onChangePhoto={setPhoto}></NewEntryCameraPicker>
                   
                   
                    <NewEntryAdressPicker address={address}
                        onChange={({ latitude, longitude, address }) => {
                            setLatitude(latitude),
                                setLongitude(longitude),
                                setAddress(address)
                        }}

                    ></NewEntryAdressPicker>
                    <NewEntryDeleteAction onOkPress={remove} entry={entry}></NewEntryDeleteAction>
                </View>

            </View>

            <ActionFooter>
                <ActionPrimaryButton

                    title={entry.id ? 'Salvar' : 'Adicionar'}

                    onPress={() => {
                        isValid() && save()
                    }} />
                <ActionSecondaryButton title="Cancelar" onPress={goBack} />
            </ActionFooter>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: Colors.background


    },


    formActionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    formContainer: {
        flex: 1,
        paddingVertical: 20,
    }

})

export default NewEntry