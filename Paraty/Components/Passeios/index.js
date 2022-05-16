import React from 'react';
import {View, Text, Image} from 'react-native';
import passeio01 from '../../assets/passeio01.png';
import passeio02 from '../../assets/passeio02.png';
import passeio03 from '../../assets/passeio03.png';
import style from './style';

export default function Passeios (){
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Passeios em Paraty</Text>
            <Text style={style.descricao}>
            O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja dois exemplos:
            </Text>

            <View style={style.cardbox}>
            <Text style={style.titulocard}>Tirolesa</Text>
            <Image source = {passeio01} style={style.img}/>
            </View>

            <View style={style.cardbox}>
            <Text style={style.titulocard}>Rafting</Text>
            <Image source = {passeio02} style={style.img}/>
            </View>

            <View style={style.cardbox}>
            <Text style={style.titulocard}>Canoagem no mangue</Text>
            <Image source = {passeio03} style={style.img}/>
            </View>

        </View>
    )
};
