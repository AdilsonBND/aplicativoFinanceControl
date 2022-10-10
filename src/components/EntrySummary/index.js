import React from "react"
import { StyleSheet, View } from 'react-native'
import EntrySummaryChart from '../EntrySummary/EntrySummaryChart'
import EntrySummaryList from "../EntrySummary/EntrySummaryList"

import Container from "../Core/Container"
import useBalanceSumByCategory from "../../hooks/useBalanceSumByCategory"


const EntrySummary = ({ days =7 , onPressActionButton }) => {




    const [balanceSum] = useBalanceSumByCategory(days)

    // console.log(balanceSum)

    return (
       
        <View style={styles.container}>


        <Container title="Categorias" actionLabelText={`Últimos ${days} dias`} actionButtonText="ver mais" onPressActionButton={onPressActionButton} >
            
        <View style={styles.inner}>   
        
        <EntrySummaryChart data={balanceSum}></EntrySummaryChart>
            {/* <EntrySummaryList data={balanceSum}></EntrySummaryList> */}
            
           
            
        
        </View>
        </Container>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        // flex: 0.8,
        height: '35%'
    },

    inner: {
        flexDirection: 'row',
        flex: 1
        
    }
})


export default EntrySummary