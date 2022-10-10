import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'




import BalanceLabel from '../../components/BalanceLabel'
import EntrySummary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'
import Colors from "../../styles/Colors";
import ActionFooter, { ActionPrimaryButton } from "../../components/Core/ActionFooter"
import RelativeDaysModal from "../../components/RelativeDaysModal";
import CategoryModal from "../../components/CategoryModal";


const Report = ({ navigation }) => {

    const currentBalance = '2064.35'

    const onClose = () => {
        navigation.goBack()
    }

    const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(false)
    const [relativeCategoryModalVisible, setRelativeCategoryModalVisible] = useState(false)
    const [relativeDays, setRelativeDays] = useState(7)
    const [category, setCategory] = useState({ id: null, name: "Todas Categorias" })


    const onRelativeDaysPress = item => {
        setRelativeDays(item)
        onRelativeDaysClosePress()
    }

    const onRelativeDaysClosePress = () => {
        setRelativeDaysModalVisible(false)
    }

    const onCategoryPress = item => {
        setCategory(item)
        onCategoryClosePress()
    }

    const onCategoryClosePress = () => {
        setRelativeCategoryModalVisible(false)
    }


    return (

        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={Colors.background} />

            <BalanceLabel></BalanceLabel>


            <View style={styles.filtersContainer}>
                <TouchableOpacity style={styles.filterButton}
                    onPress={() => { setRelativeDaysModalVisible(true) }}
                >
                    <Text style={styles.filterButtonText}>Últimos {relativeDays} dias</Text>
                    <Icon name="keyboard-arrow-down" size={20} color={Colors.champagneDark} />
                </TouchableOpacity>
                <RelativeDaysModal isVisible={relativeDaysModalVisible} onConfirm={onRelativeDaysPress} onCancel={onRelativeDaysClosePress} />

                <TouchableOpacity style={styles.filterButton} onPress={() => setRelativeCategoryModalVisible(true)}>
                    <Text style={styles.filterButtonText}>{category.name}</Text>
                    <Icon name="keyboard-arrow-down" size={20} color={Colors.champagneDark} />
                </TouchableOpacity>
                <CategoryModal categoryType="all" isVisible={relativeCategoryModalVisible} onConfirm={onCategoryPress} onCancel={onCategoryClosePress} />

            </View>

            <EntrySummary days={relativeDays}></EntrySummary>
            <EntryList days={relativeDays} category={category} onEntryPress={(entry) => navigation.navigate('NewEntry', { entry: entry })}></EntryList>


            <View style={styles.actionFooterStyle}>


                <ActionFooter >
                    <ActionPrimaryButton title="Fechar" onPress={onClose} />
                </ActionFooter>

            </View>



        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: Colors.background
    },
    filterButton: {
        flexDirection: 'row',
        borderColor: Colors.champagneDark,
        borderWidth: 1,
        borderRadius: 150,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
    },
    filterButtonText: {
        color: Colors.champagneDark,

    },
    filtersContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5,

    },
    actionFooterStyle: {

    }
})

export default Report