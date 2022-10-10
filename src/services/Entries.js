import { Alert } from "react-native";

import moment from '../vendors/moment'

import firestore from '@react-native-firebase/firestore'

import {getUserAuth} from './Auth'

export const getEntries = async (days, category) => {
    
    const userAuth = await getUserAuth()
    let querySnapshot
    
    if (days > 0) {
        const date = moment().subtract(days, 'days').toDate()
        
        querySnapshot = await firestore().collection('entries').where('userId', '==', userAuth)
        .orderBy('entryAt').startAt(date).get()
    } else {
        querySnapshot = await firestore().collection('entries').where('userId', '==', userAuth)
        .orderBy('entryAt').get()
    }
    let entries = querySnapshot.docs.map(documentSnapshot => {
        return {...documentSnapshot.data(), id: documentSnapshot.id}
    })
    
    if (category && category.id) {
        entries = entries.filter(entry => entry.category.id === category.id)
    }
   

    return entries
}



// export const addEntry = async () => {


//     const collectionName = await firestore().collection('categories').get()
            
//             // await firestore().collection('categories').add({
//             //     name: 'fulano',
//             //     lastName: 'ciclano'
//             // }).then(() =>{
//             //     console.log('adicionado')
//             // })
            
//         console(collectionName)

// }
export const addEntry = async (entry) => {

    const userAuth = await getUserAuth()
    
    let data = {}
    

    try {

            data = {
                amount: entry.amount,
                description: entry.category.name,
                entryAt: entry.entryAt || new Date(),
                latitude: entry.latitude  || null,
                longitude: entry.longitude  || null,
                address: entry.address || null,
                photo: entry.photo || null,
                isInit: entry.isInit || false,
                category: entry.category,
                userId: userAuth,
                
                
            };
            
            await firestore().collection('entries').add(data);
            // console.log(data)
        console.log('saveEntry :: data:', JSON.stringify(data));

    } catch(error) {
        console.error('addEntry :: error on save object:', JSON.stringify(data), error);
        Alert.alert('Erro ao salvar os dados de lançamento')
    }

    return data
}

export const updateEntry = async (entry) => {

    const userAuth = await getUserAuth()
    console.log('updateEntry :: '+ JSON.stringify(entry))

    let data = {}

    try {
        data = {
           
            amount: entry.amount,
            description: entry.category.name,
            entryAt: entry.entryAt || new Date(),
            latitude: entry.latitude || null,
            longitude: entry.longitude || null,
            address: entry.address || null,
            photo: entry.photo || null,
            isInit: entry.isInit || false,
            category: entry.category,
            userId: userAuth,
        }

        // console.log(data)

        await firestore().collection('entries').doc(entry.id).update(data)
    } catch (error) {
        console.log(error)

    }
    return data
}



export const deleteEntry = async entry => {
   
    await firestore().collection('entries').doc(entry.id).get().then(
        documentSnapshot => {
          
            if(documentSnapshot.data().isInit === true){
                console.log ('Não é possível deletar')
                Alert.alert('Não é possível excluir o valor inicial, mas você pode alterá-lo')
               
            } else {
                console.log ('Deletado')
                firestore().collection('entries').doc(entry.id).delete()
            }
        }
    )
    


}


// export const deleteEntry = async entry => {
   
//     try {

        
//         await firestore().collection('entries').doc(entry.id).delete()

//         console.log('deletado :: ', JSON.stringify(entry))
//      } catch (error) {
//         console.log(error)
//      }

