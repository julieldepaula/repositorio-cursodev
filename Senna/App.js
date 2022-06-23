import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createTabNavigator} from '@react-navigation/bottom-tabs';

import TelaPrincipal from "./Components/TelaPrincipal/";
import Restaurantes from "./Components/Restaurantes/";
import Passeios from "./Components/Passeios/";

const Tab = createTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Início" component={TelaPrincipal}/>
        <Tab.Screen name="Restaurantes" component={Restaurantes}/>
        <Tab.Screen name="Passeios" component={Passeios}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
};