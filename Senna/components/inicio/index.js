import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

import fotobackground from '../../assets/fundo.jpg';
import fotocapa from '../../assets/foto-capa.jpg'
import style from './style';

export default function TelaPrincipal () {
    return(

     <ImageBackground source = {background} style={style.background}>

        <View>

            <Image source = {fotocapa} style = {fotocapa}/>

            <Text> </Text>

        </View>

     
     </ImageBackground>


     )
};