import React from "react"
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import {LineChart} from "react-native-chart-kit";
import useBalanceSumByDate from "../../../hooks/useBalanceSumByDate";
import Colors from "../../../styles/Colors";




const BalancePanelChart = () => {

  
  
  const screenWidth = Dimensions.get("window").width;
  
  const [balanceSum] = useBalanceSumByDate()
  // console.log(balanceSum)
  

  
  
  
    const data = {
      // labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: balanceSum,
          color: (opacity = 1) => `rgba(52,73,94, ${opacity})`, // optional
          
        }
      ],
      
    };
    const chartConfig = {
  
      backgroundGradientFromOpacity: 0,
     
      backgroundGradientToOpacity: 0.0,
      color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.0,
      useShadowColorFromDataset: false,
      
      
      
    };

    return (
       
      <View style={styles.container}>
  
  <LineChart
  style={styles.chart}
  data={data}
  width={screenWidth}
  height={75}
  chartConfig={chartConfig}
  withHorizontalLabels={true}
  fromZero={true}

  
  


/>



</View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        
      
    
    
    },
    label: {
        fontSize: 20,
    },
    value: {
        fontSize: 20,
    },
    chart: {
     
      
      // paddingRight: 5,
      // paddingLeft: 5
    }

})

export default BalancePanelChart