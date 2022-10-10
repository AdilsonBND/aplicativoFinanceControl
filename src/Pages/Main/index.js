import React, { useEffect, useState } from "react"
import { View, StyleSheet, LogBox } from 'react-native'
import BalancePanel from "../../components/BalancePanel"
import EntrySummary from "../../components/EntrySummary"
import EntryList from "../../components/EntryList"
import Colors from '../../styles/Colors'
import useEntries from "../../hooks/useEntries"
import ActionFooter, { ActionPrimaryButton } from '../../components/Core/ActionFooter'
import { cleanUserAuth } from "../../services/Auth"




const Main = ({ navigation }) => {

    const onLogoutPress = async () => {
        await cleanUserAuth()
        navigation.reset({
            index: 0,
            key: null,
            routes: [{name: 'SignIn'}]

        }
        )
    }


    return (
        <View style={styles.container}>

            <BalancePanel onNewEntryPress={() => navigation.navigate("NewEntry")} ></BalancePanel>
            <View style={styles.inner}>

                <EntrySummary onPressActionButton={() => navigation.navigate("Report")} />


                <EntryList></EntryList>

            </View>
            <ActionFooter>
                <ActionPrimaryButton
                title='LogOut'
                onPress={onLogoutPress}
                ></ActionPrimaryButton>

            </ActionFooter>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,


    },
    inner: {
        flex: 1
    },


})

export default Main