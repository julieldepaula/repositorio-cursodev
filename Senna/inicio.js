import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import telainicio from '../../assets/Telainicio.png';
import style from './style';
export default function TelaPrincipal (){
    return(
     <ImageBackground source = {Telainicio} style={style.background}>
     
     </ImageBackground>
     )
};