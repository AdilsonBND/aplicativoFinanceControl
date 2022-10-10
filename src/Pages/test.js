import React from "react";
import {View, Button} from 'react-native'
import { addEntry } from "../services/Entries";

const test = () => {
    return(
        <View>
            <Button onPress={addEntry} title="add" />
        </View>
    )
}

export default test