import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

import Imagem from '../../assets/fundo.jpg';
import Imagem2 from '../../assets/foto-capa.jpg';
import style from './style';

export default function TelaPrincipal () {
    return(
     <ImageBackground source={ Imagem } style={style.Fundo} blurRadius={5} resizeMode= "cover" >

        <View>
        <Image source={Imagem2} style={style.img}/>
        </View>

        <View style={style.container}>
            <Text style={style.titulo}>Ayrton Senna</Text>
            <Text style={style.descrição}>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
        </View>

      </ImageBackground>
    )
};