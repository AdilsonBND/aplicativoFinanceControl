import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from "react-native";
import logo from '../../assets/newSmart.png'
import Colors from "../../styles/Colors";
import { signUp } from "../../services/Auth";


const SignUp = () => {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')

    const onSubmit = async () => {
        if (loading === false) {
            setLoading(true)
            const {registerSuccess} = await signUp({
                email,
                password,
                name
            })
            if(registerSuccess === true) {
                navigation.reset({
                    index: 0,
                    key: null,
                    routes: [{name: 'Welcome'}]
                })
            } else {
                setLoading(false)
            }
        }
    }


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={logo} style={styles.logoImage}  />
            <TextInput
            style={styles.input}
            placeholder={'Seu nome'}
            placeholderTextColor={Colors.blueDark}
         
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={text => {
                setName(text)
            }}
            />
            <TextInput
            style={styles.input}
            placeholder={'Seu e-mail'}
            placeholderTextColor={Colors.blueDark}
            keyboardType='email-address'
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={text => {
                setEmail(text)
            }}
            />
            <TextInput
            style={styles.input}
            placeholder={'Sua Senha'}
            placeholderTextColor={Colors.blueDark}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={text => {
                setPassword(text)
            }}
            />
            <View style={styles.buttonsView}>
            <TouchableOpacity onPress={onSubmit} style={styles.button}>
                <Text style={styles.buttonText}>
                    {loading ? 'Carregando ...' : 'Criar conta'}
                </Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => {
                navigation.navigate('SignIn')
            }} style={styles.buttonSignUp}>
                <Text style={styles.buttonSignUpText}>
                    Fazer Login
                </Text>

            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
       
        backgroundColor: Colors.background,
    },
    logoImage: {
        width: 150,
        height: 150,
        alignSelf: 'center',
     
    },
    input: {
        
        flexDirection: 'row',
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        fontSize: 14,
        color: Colors.white,
        marginTop: 15,
        marginHorizontal: 15,
        textAlign: 'center'
     
    },
    button: {
        borderRadius: 150,
        borderWidth: 1,
        borderColor: Colors.blueDark,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '45%',
    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        color: Colors.white
    },
    buttonSignUp: {
        
        borderRadius: 150,
        
        color: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: Colors.blueDark,
        width: '45%',
    },
    buttonSignUpText: {
        fontSize: 14,
        textAlign: 'center',
        color: Colors.white
    },
    buttonsView: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        marginHorizontal: 18,

    }
})

export default SignUp