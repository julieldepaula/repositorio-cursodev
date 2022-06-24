import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createbottomTabNavigator} from '@react-navigation/bottom-tabs';

import TelaInicio from "./Components/inicio/";
import Telasobre from "./Components/sobre/";
import TelaVitorias from "./Components/vitorias/";

const Tabs = createbottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Início" component={inicio}/>
        <Tabs.Screen name="Restaurantes" component={sobre}/>
        <Tabs.Screen name="Passeios" component={vitorias}/>
      </Tabs.Navigator>
    </NavigationContainer>
  )
};