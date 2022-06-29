import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

import TelaInicio from "./components/inicio/index";
import TelaSobre from "./components/sobre/index";
import TelaVitorias from "./components/vitorias/index";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tabs.Navigator ScreenOptions={{
         headerStyle:{
          backgroundColor: '#eecb01'
         },
         headerTitleStyle: {
          color: '#000',
          fontWeight: 'bold'
        },
        tabBarActiveTintColor: '#ba171a',
        tabBarInactiveTintColor: "#000",
        tabBarActiveBackgroundColor: "#fff",
        tabBarStyle: { backgroundColor: "#eecb01"},
      }}>

        <Tabs.Screen 
        name="Início" 
        component={TelaInicio}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={ color } size={ 20 } />
          ),
        }}
        />
        <Tabs.Screen 
        name="Sobre" 
        component={TelaSobre}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="question-circle" color={ color } size={ 20 } />
          ),
        }}
        />
        <Tabs.Screen 
        name="Vitórias" 
        component={TelaVitorias}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="trophy" color={ color } size={ 20 } />
          ),
        }}
        />
      </Tabs.Navigator>
    </NavigationContainer>

  )
};