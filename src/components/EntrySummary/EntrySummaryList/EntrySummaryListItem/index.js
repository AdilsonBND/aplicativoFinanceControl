import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, {Circle} from "react-native-svg";
import Colors from "../../../../styles/Colors";

const EntrySummaryListItem = ({entry}) => {


    // console.log(entry.category.name)

    const bulletColor = entry.category.color
    return(
        <View style={styles.container}>
             <Svg height="20" width="22">
                <Circle
                cx="10"
                cy="10"
                r="8"
                stroke={Colors.background}
                strokeWidth="0.5"
                fill={bulletColor}
                />
             </Svg>
            <Text style={styles.name}>{entry.category.name}</Text>
            <Text style={styles.value}>R$ {`${entry.amount}`},00</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 230,
        flexDirection: 'row',
        marginLeft: 10,
        paddingTop: 5,
        
        
        
        
        
    },
    name: {
        fontSize: 12,
        color: Colors.white,
        marginTop: 2,
        flex: 1,
        
        
    },
    value: {
    
        marginLeft: 12,
        marginRight: 60,
        fontSize: 12,
        color: Colors.white,
        
        marginTop: 3,
        
    }
})

export default EntrySummaryListItem