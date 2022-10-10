
import { useState, useCallback } from "react";
import { getBalanceSumByDate } from "../services/Balance";
import { useFocusEffect } from "@react-navigation/native";

const useBalanceSumByDate = ( days = 7) => {
    const [balanceSum, setBalanceSum] = useState([0])


    useFocusEffect(
        useCallback( () => {
            const loadBalanceSumByDate = async () => {
                const data = await getBalanceSumByDate(days)
                setBalanceSum([...data])
            }
            loadBalanceSumByDate()
        }, [days])
    )
    
   return [balanceSum]
    
    
}

export default useBalanceSumByDate