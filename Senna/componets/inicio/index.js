import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import background from '../../assets/fundo.jpg';
import style from './style';

export default function TelaPrincipal (){
    return(

     <ImageBackground source = {background} style={style.background}>
     
     </ImageBackground>

     
     )
};