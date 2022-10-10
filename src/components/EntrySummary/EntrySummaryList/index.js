import React from "react"
import { View, Text, StyleSheet, FlatList } from 'react-native'
import EntrySummaryListItem from "./EntrySummaryListItem"


const EntrySummaryList = ({data}) => {

    

    return (
        <View style={styles.container}>

        <FlatList
        style={styles.container} 
        data={data}
        keyExtractor={item => item.category.id}
        renderItem={({item})=> <EntrySummaryListItem entry={item} /> }
        />
            
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 5,
       
    },
    

})

export default EntrySummaryList