import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import Imagem from '../../assets/fundo.jpg';
import style from './style';

export default function TelaVitorias () {
    return (
    <ImageBackground source={ Imagem } style={style.Fundo}>
      <View>
          <Text>Título</Text>
          <Text>Parágrafo</Text>
      </View>
    </ImageBackground>
    )
};