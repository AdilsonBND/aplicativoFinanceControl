import React from "react";
import { Text } from "react-native";
import {NumericFormat} from 'react-number-format'

const Currency = ({value}) => {
    return (
        <NumericFormat 
        value={parseFloat(value)}
        displayType={'text'}
        thousandSeparator={'.'}
        decimalSeparator={','}
        fixedDecimalScale={true}
        decimalScale={2}
        prefix={'R$ '}
        renderText={item => <Text>{item}</Text>}
        ></NumericFormat>
    )
}

export default Currency