import React, { useEffect, useState } from "react"
import {  FlatList, View, StyleSheet } from 'react-native'
import EntryListItem from "./EntryListItem"
import { useNavigation } from "@react-navigation/native"
import Container from '../Core/Container'
import useEntries from "../../hooks/useEntries"
import { cleanInitialized } from "../../services/Welcome"


const EntryList = ({days = 7, category} ) => {

    const navigation = useNavigation()

   const [entries] = useEntries(days, category)

    // useEffect(() => {
    //     async function loadEntries() {
    //         const data = await getEntries(days, category);
    //         setEntries(data);
    //     }
    //     loadEntries()
    // }, [days, category])

    

    return (


        <View style={styles.container}>

        <Container title={'Últimos Lançamentos'} actionLabelText={`Últimos ${days} dias`} actionButtonText={'ver mais'} onPressActionButton={() => navigation.navigate('Report')}>

           

            

            

            <FlatList
              
                data = {entries}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <EntryListItem
                    entry={item}
                    isFirstItem={index === 0}
                    isLastItem={index === entries.length -1}
                    onEntryPress={(entry) => {
                       
                        navigation.navigate('NewEntry', {entry: entry, isEdit : true})
                        
                    }}
                    
                    />
                    
                    )
                }>

               </FlatList>
                

        </Container>
                    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // zIndex: 0,
    }
})


export default EntryList