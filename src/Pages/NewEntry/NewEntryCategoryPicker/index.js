import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Colors from "../../../styles/Colors";
import CategoryModal from "../../../components/CategoryModal";




const NewEntryCategoryPicker = ({debit, category, onChangeCategory, entry}) => {

    const [modalVisible, setModalVisible] = useState(false)
    // const [debitCategories, setDebitCategories] = useState([])
    // const [creditCategories, setCreditCategories] = useState([])

    // useEffect(() => {
    //     async function loadCategories() {
    //         const dataDebit = await getDebitCategories()
    //         const dataCredit = await getCreditCategories()
           
    //         setDebitCategories(dataDebit)
    //         setCreditCategories(dataCredit)
    //     }
    //     loadCategories()

    // }, [])

  
    const onCategoryPress = item => {
        onChangeCategory(item)
        onClosePress()
    }

    const onClosePress = () => {
        setModalVisible(false)
    }




    return (
        !entry.category.isInit && (

        
        <View>
            <TouchableOpacity style={styles.pickerButton} onPress={() => { setModalVisible(true) }}>
                <Text style={styles.pickerButtonText}>{category.name}</Text>
            </TouchableOpacity>
            {/* <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}>


                <View style={styles.modal}>

                    <FlatList
                        data={debit ? debitCategories : creditCategories}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.modalItem}
                            onPress={() =>                              
                               {
                                onChangeCategory(item)
                                onClosePress()
                               }
                            }
                                >
                                <Text style={[styles.modalItemText, { color: item.color }]}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />

                
                    <ActionFooter>
                        <ActionPrimaryButton title="Fechar" onPress={onClosePress}/>
                        <ActionSecondaryButton />
                    </ActionFooter>

                </View>



            </Modal> */}


            <CategoryModal categoryType={debit ? 'debit' : 'credit'} isVisible={modalVisible} onConfirm={onCategoryPress} onCancel={onClosePress} />
        </View>
        )
    )
}

const styles = StyleSheet.create({
    pickerButton: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
    },
    pickerButtonText: {
        fontSize: 28,
        color: Colors.white,
        textAlign: 'center'
    },
    
    
})

export default NewEntryCategoryPicker