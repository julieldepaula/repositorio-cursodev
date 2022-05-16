import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TelaPrincipal from "./Components/TelaPrincipal/";
import Restaurantes from "./Components/Restaurantes/";
import Passeios from "./Components/Passeios/";
import Hospedagem from "./Components/Hospedagem/";

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal}/>
        <Stack.Screen name="Restaurantes" component={Restaurantes}/>
        <Stack.Screen name="Passeios" component={Passeios}/>
        <Stack.Screen name="Hospedagem" component={Hospedagem}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};