import React from "react"
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import { PieChart } from "react-native-chart-kit"


const EntrySummaryChart = ({data}) => {

  const chartData = data.map(({category, amount}) => ({
    value: amount,
    color: category.color,
    name: category.name,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  }))

  // console.log(chartData)

    const screenWidth = Dimensions.get("window").width;

    
  
    const chartConfig = {
  
        backgroundGradientFromOpacity: 0,
        
       
        // backgroundGradientToOpacity: 0.0,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        // labelColor: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        // strokeWidth: 2, // optional, default 3
        // barPercentage: 0.0,
        
        
        
        
      }


    return (
        <View style={styles.container}>


<PieChart
  data={chartData}
  width={screenWidth}
  height={130}
  chartConfig={chartConfig}
  accessor={"value"}
  backgroundColor={"transparent"}
  paddingLeft={-80}
  
  center={[50, 2]}
  
  hasLegend={true}
  
//   absolute
/>

            
        </View>
    )

    }


const styles = StyleSheet.create({
    container: {
      
      flex: 1,
    },
  
})

export default EntrySummaryChart