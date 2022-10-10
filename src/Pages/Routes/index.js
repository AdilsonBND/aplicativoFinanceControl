
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from '../Main'
import NewEntry from '../NewEntry'
import Report from '../Report'
import Welcome from "../Welcome";
import Loading from "../Loading";
import React, {useState, useEffect} from "react";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { isInitialized } from "../../services/Welcome";
import { isLogged } from "../../services/Auth";

const Stack = createNativeStackNavigator()



const StackScreens = ({ logged, initiated}) => {


    return(
        
            <Stack.Navigator initialRouteName={logged ? (initiated ? 'Main' : 'Welcome') : 'SignIn'} screenOptions={{headerShown: false}}>
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="NewEntry" component={NewEntry} />
                <Stack.Screen name="Report" component={Report} />
                <Stack.Screen name="Welcome" component={Welcome} />
                
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        
    )
}

const Routes = () =>{


  const [isLoading, setIsLoading] = useState(true)
  const [initiated, setInitiated] = useState(false)
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    async function initialVerifications() {
      if (await isInitialized()) {
        setInitiated(true)

      }
      if (await isLogged()){
        setLogged(true)
      }
      setIsLoading(false)
    }
    initialVerifications()
  })

    if (isLoading) {
      return <Loading></Loading>
    }
    return(
      <NavigationContainer>
        <StackScreens logged={logged} initiated={initiated} />
      </NavigationContainer>  
    )
}

export default Routes