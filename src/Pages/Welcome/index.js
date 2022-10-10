import React, {useState} from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../../styles/Colors";
import Logo from '../../assets/newSmart.png'
import WelcomeMessage from "./WelcomeMessage";
import WelcomeBalanceInput from "./WelcomeBalanceInput";
import ActionFooter, {ActionPrimaryButton} from "../../components/Core/ActionFooter";
import { addEntry } from "../../services/Entries";
import useCategories from "../../hooks/useCategories";
import { setInitializer } from "../../services/Welcome";


const Welcome = ({navigation}) => {

    

    

    const [,,,initCategory] = useCategories()
    const [amount, setAmount] = useState(0)

    const onSavePress = () => {

        addEntry({
            amount: parseFloat(amount),
            isInit: true,
            category: initCategory   
        })

        setInitializer()
        navigation.navigate('Main')
        
    }

    const isValid = () => {
        if(amount === Number){
            return true
        } else { 
            return false
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={Logo}></Image>
            </View>
            <WelcomeMessage></WelcomeMessage>
            <WelcomeBalanceInput value={amount} onChangeValue={setAmount}></WelcomeBalanceInput>
            <View style={styles.button}>
            <ActionPrimaryButton title={"Começar"} onPress={isValid && onSavePress}></ActionPrimaryButton>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
    },
    logo: {
        alignItems: 'center',
        marginTop: 20,
    },
    logoImage: {
        width: 150,
        height: 150,
        
    },
    button: {
        width: 330,
        alignSelf: 'center',
        marginTop: 40,

    }
})

export default Welcome
