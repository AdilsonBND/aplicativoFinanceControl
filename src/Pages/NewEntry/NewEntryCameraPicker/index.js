import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Modal, Text, Alert } from 'react-native'
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import Colors from '../../../styles/Colors'
import NewEntryCameraPickerModal from "./NewEntryCameraPickerModal";




const NewEntryCameraPicker = ({ photo, onChangePhoto}) => {



    const [showModal, setShowModal] = useState(false)

    const onChangePhotoPress = (newPhoto) => {
        onChangePhoto(newPhoto)
        onClosePress()
    }
    const onDeletePicturePress = () => {
        onChangePhoto(null)
        onClosePress(false)
    }
    
    const onClosePress = () => {
        setShowModal(false)
    }

    return (
        <View>
            <TouchableOpacity style={[styles.button, photo ? styles.buttonActived : '']} onPress={() => setShowModal(true)}>
                <Icon name="photo-camera" size={30} color={Colors.white} />
            </TouchableOpacity>
            <NewEntryCameraPickerModal photo={photo} isVisible={showModal} onChangePhoto={onChangePhotoPress} onDelete={onDeletePicturePress} onClose={onClosePress}></NewEntryCameraPickerModal>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
        backgroundColor: Colors.asphalt,
        width: 59,
        height: 59,
        marginHorizontal: 3,
    },
    buttonActived: {
        backgroundColor: Colors.blue
    }

})

export default NewEntryCameraPicker