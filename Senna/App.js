import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TelaInicio from "./Componets/inicio/";
//import TelaSobre from "./Components/sobre/";
//import TelaVitorias from "./Components/vitorias/";

const Tabs = createBottomTabNavigator();

export default function App() {
  return(

    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Início" component={TelaInicio}/>
        <Tabs.Screen name="Sobre" component={TelaSobre}/>
        <Tabs.Screen name="Vitórias" component={TelaVitorias}/>
      </Tabs.Navigator>
    </NavigationContainer>

  )
};