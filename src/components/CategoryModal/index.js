import React, {useEffect, useState} from "react";
import { Modal, View, FlatList, TouchableOpacity, StyleSheet, Text } from "react-native";
import ActionFooter, {ActionPrimaryButton, ActionSecondaryButton} from "../Core/ActionFooter";
import Colors from "../../styles/Colors";
import useCategories from '../../hooks/useCategories'


const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {

    const [debitCategories, creditCategories, allCategories] = useCategories()
    

   
    return(
        <Modal
                animationType="slide"
                transparent={false}
                visible={isVisible}>


                <View style={styles.modal}>

                    <FlatList
                        data={
                            categoryType === 'all' 
                            ? allCategories 
                            : categoryType === 'debit' 
                            ? debitCategories 
                            : creditCategories
                        }
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.modalItem}
                            onPress={() =>                              
                               {
                                onConfirm(item)
                                
                               }
                            }
                                >
                                <Text style={[styles.modalItemText, { color: item.color }]}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />

                
                    <ActionFooter>
                        <ActionPrimaryButton title="Fechar" onPress={onCancel}/>
                        <ActionSecondaryButton />
                    </ActionFooter>

                </View>



            </Modal>
    )
}

const styles = StyleSheet.create({
    
    modal: {
        flex: 1,
        backgroundColor: Colors.background,

    },
    modalItem: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
    },
    modalItemText: {
        color: Colors.white,
        fontSize: 22,
        textAlign: 'center'
    },
    
})

export default CategoryModal