
// import CategorySchema from "../schemas/CategorySchema";
// import EntrySchema from "../schemas/EntrySchema";
// import {getDefaultCategories } from "./Categories";



// export const getRealm = async () => {
//     const realm = await Realm.open({
//         schema: [CategorySchema, EntrySchema],
//         schemaVersion: 9,
//     })
//     // dropDB(realm)
//     // cleanInitialized()
//     initDB(realm)
//     return realm

// }

// export const initDB = realm => {
//     const categoriesLength = realm.objects('Category').length
   

//     if (categoriesLength === 0) {
//         const categories = getDefaultCategories()
    

//         try {
//             realm.write(() => {
//                 categories.forEach(category => { 
     
//                     realm.create('Category', category, true)
//                 })
//             })
//         } catch (error) { throw (error) }


//     } else{
    
//     }
// }

    // export const dropDB = realm => {
    //     console.log('drop')
    //     realm.write(() => {
    //         realm.deleteAll()
    //     })
    // }
