import { useEffect, useState } from "react";
import { getBalance } from "../services/Balance";
import { useNavigation } from "@react-navigation/native";

const useBalance = () => {

    const navigation = useNavigation()
    const [balance, setBalance] = useState()

 
    useEffect(() => {
        const loadBalance = navigation.addListener('focus', async () => {
            const value = await getBalance()
            setBalance(value)
        })
        return loadBalance
    }, [navigation])
    return [balance]
}
export default useBalance