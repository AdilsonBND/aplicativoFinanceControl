import React from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import Colors from '../../../styles/Colors'
import Geocoder from 'react-native-geocoding'



const NewEntryAdressPicker = ({address, onChange}) => {

    const getLocation = (latitude, longitude) => {
        Geocoder.init('AIzaSyBRgzVBz-FGJquwrNcleOPC8MSbeQyRNK8')
        Geocoder.from({ latitude, longitude })
            .then(json => {
                const formatedAddress = json.results[0].formatted_address
                
                

                Alert.alert("Localização: ", formatedAddress, [
                    {
                        text: 'Cancelar',
                        onPress: () => {},
                        style: 'cancel',
                    },
                    {
                        text: 'Confirmar',
                        onPress: () => {
                            onChange({
                                latitude: latitude, 
                                longitude: latitude, 
                                address: formatedAddress})
                        }
                    }
                ])
            })
            .catch(error => {
                console.error('erro Address', error)
                Alert.alert('Erro ao recuperar endereço')
            })
    }


    const getPosition = () => {
        Geolocation.getCurrentPosition(pos => {
            const latitude = pos.coords.latitude
            const longitude = pos.coords.longitude

            getLocation(latitude, longitude)
        }, error => {
            console.error('erro geo', error)
            Alert.alert('Erro ao recuperar posição')
        });

    }


    const onButtonPress = () => { 
        if (address){
            Alert.alert("Localização: ", address, [
                {
                    text: 'Apagar',
                    onPress: () => {onChange({latitude: null, longitude: null, address: ''})},
                    style: 'cancel',
                },
                {
                    text: 'Ok',
                    onPress: () => console.log("Ok")
                }
            ])
            
            
            
        } else {
            
            getPosition() 
        }
        console.log(address)
    }



    return (
        <View>
            <TouchableOpacity style={[styles.button, address ? styles.buttonActived : '']} onPress={onButtonPress}>
                <Icon name="person-pin" size={30} color={Colors.white} />
            </TouchableOpacity>
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

export default NewEntryAdressPicker