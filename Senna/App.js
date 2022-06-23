import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createTabNavigator} from '@react-navigation/bottom-tabs';

import TelaPrincipal from "./Components/TelaPrincipal/";
import Restaurantes from "./Components/Restaurantes/";
import Passeios from "./Components/Passeios/";
import Hospedagem from "./Components/Hospedagem/";

const Tab = createTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TelaPrincipal" component={TelaPrincipal}/>
        <Tab.Screen name="Restaurantes" component={Restaurantes}/>
        <Tab.Screen name="Passeios" component={Passeios}/>
        <Tab.Screen name="Hospedagem" component={Hospedagem}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
};