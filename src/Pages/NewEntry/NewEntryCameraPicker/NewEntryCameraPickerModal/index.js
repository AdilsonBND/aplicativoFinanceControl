import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Modal, StyleSheet, Text, ImageBackground } from "react-native";
import { Camera, useCameraDevices, PhotoFile } from "react-native-vision-camera";
import Colors from '../../../../styles/Colors'
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

const NewEntryCameraPickerModal = ({photo, isVisible, onChangePhoto, onDelete, onClose}) => {

    
    const camera = useRef(Camera)

    

    const onTakePicture = async () => {
        try {

            const {path} = await camera.current.takePhoto({
                flash: 'on',
                quality: 0.5,
            })
    
            onChangePhoto(path)
        
     

        } catch (error) {
            console.log(error)

        }
    }



    React.useEffect(() => {
        requestCameraPermission()
    }, [])

    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back

    const requestCameraPermission = React.useCallback(async () => {
        const permition = await Camera.requestCameraPermission()

        if (permition === 'denied') await Linking.openSettings()
    }, [])

    function renderCamera() {
        if (device == null) {
            return (
                <View style={styles.noCam}>
                    <Text style={styles.noCamText}>Câmera não encontrada</Text>
                    <Icon
                        name="close"
                        size={50}
                        color={Colors.white}
                        onPress={onDelete}
                        style={styles.buttonDeletePicture}

                    />
                </View>

            )
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        ref={camera}

                        photo={true}
                        style={{ flex: 1 }}
                        device={device}
                        isActive={true}
                        enableZoomGesture
                    />
                    <Icon
                        name="photo-camera"
                        size={40}
                        color={Colors.white}
                        onPress={onTakePicture}
                        style={styles.buttonTakePicture}

                    />
                    <Icon
                        name="close"
                        size={50}
                        color={Colors.white}
                        onPress={onDelete}
                        style={styles.buttonDeletePicture}

                    />

                </View>
            )
        }
    }

const image = { uri : `file://${photo}`}


    // console.log(image)

    return (
        <View>

                 <Modal animationType="slide" transparent={false} visible={isVisible}>

                {photo ? (

                    <ImageBackground source={image} style={styles.imagePreview}>
                        <View style={styles.pictureButtonAction}>
                        <Icon name="delete" size={50} color={Colors.white} onPress={onDelete} style={styles.buttonClose} />
                        <Icon name="check" size={50} color={Colors.white} onPress={onClose} style={styles.buttonCkeck} />

                        </View>
                    </ImageBackground>

                ) : (

                    renderCamera()
                    
                )}

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonTakePicture: {
        flex: 0,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
    },
    buttonDeletePicture: {
        flex: 0,
        position: 'absolute',
        top: 20,
        right: 20,
    },
    camera: {
        flex: 1,
    },
    noCam: {
        backgroundColor: Colors.background,
        flex: 1
    },
    noCamText: {
        flex: 0,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
        fontSize: 30,
        color: Colors.white
    },
    imagePreview: {
        width: "100%",
        height: '100%'
    },
    pictureButtonAction: {
        flx: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 16
    },
    buttonCkeck: {
        marginRight: 16,
    },
    buttonClose: {
        marginLeft: 16,
    }
})

export default NewEntryCameraPickerModal