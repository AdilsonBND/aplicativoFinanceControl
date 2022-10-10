import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Svg, { Circle, Rect } from "react-native-svg"
import Colors from '../../../styles/Colors'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import Currency from "../../Core/Currency"
import moment from '../../../vendors/moment'

const EntryListItem = ({ entry, isFirstItem, isLastItem, onEntryPress }) => {



    const bulletLineY = isFirstItem ? 25 : 0
    const bulletLineX = isLastItem ? 25 : 50
    const showBulletLine = !(isFirstItem && isLastItem)
    const bulletColor = entry.category.color || Colors.white
    


    return (


        <TouchableOpacity onPress = {() => onEntryPress &&  onEntryPress(entry) }
        >

        <View style={styles.container}>


            <View style={styles.bullet}>
                <Svg height="50" width="30" >
                    {showBulletLine && (

                        <Rect

                            x="09"
                            y={bulletLineY}
                            width="1.5"
                            height={bulletLineX}
                            fill={Colors.background}

                        />
                    )}

                    <Circle
                        cx="10"
                        cy="25"
                        r='8'
                        stroke={Colors.background}
                        strokeWidth="1.5"
                        fill={bulletColor}
                    >

                    </Circle>
                </Svg>

            </View >

            <View style={styles.description}>
                <Text style={styles.descriptionText}>{entry.description}</Text>
                <View>
                    <View style={styles.entriesAll}>

                    <Icon style={styles.entryAtIcon} name="access-time" size={12} />
                    <Text style={styles.entryAtText}>{
                    moment(entry.entryAt.toDate()).calendar()
                    }</Text>
                    </View>

                    {entry.address && (
                        <>
                    <View style={styles.entriesAll}>

                    <Icon style={styles.addressIcon} name="person-pin" size={12} />
                    <Text style={styles.addressText} numberOfLines={1}>{entry.address}</Text>
                    </View>
                    </>
                    )}
                </View>
            </View>

            <View style={styles.amount}>
                <Text style={styles.amountText}><Currency value={entry.amount}></Currency></Text>

            </View>



        </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row'

    },
    bullet: {

    },
    description: {
        flex: 1,

        justifyContent: 'center'
    },
    amount: {

        justifyContent: 'center'
    },
    amountText: {
        fontSize: 14,
        color: Colors.white,
        fontWeight: 'bold',

    },
    descriptionText: {
        fontSize: 14,
        color: Colors.white
    },
    entriesAll: {
        flexDirection: 'row'
    },
    entryAtIcon: {
        marginTop: 2,
        marginRight: 2,
        color: Colors.metal,
    },
    addressIcon: {
        marginRight: 2,
        marginLeft: 5,
        marginTop: 2,
        color: Colors.metal
    },
    entryAtText: {
        fontSize: 12,
        color: Colors.metal
    },

    addressText: {
        fontSize: 12,
        color: Colors.metal,
        flexDirection: 'row'
        

    }

})

export default EntryListItem

{/* <Text style={styles.entry}>
            {entry.description} - R$ {entry.amount}
            </Text> */}


//  <Button title={item.id} onPress={()=> {
//             navigation.navigate('NewEntry',{entry: item})
//             LogBox.ignoreLogs([
//                 'Non-serializable values were found in the navigation state',
//               ])
            
//         }}></Button>