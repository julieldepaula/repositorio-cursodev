import React from 'react';
import {View, Text, Image, ScrollView,} from 'react-native';

import fotocapa from '../../assets/foto-capa.jpg';
import imagem1 from '../../assets/rei-da-chuva.png';
import imagem2 from '../../assets/rei-de-monaco.png';
import imagem3 from '../../assets/silvastone.png';
import imagem4 from '../../assets/preparacao.png';
import style from './style';

export default function TelaSobre () {
    return(
        <View style={style.container1}>

            <Text style={style.Titulo}>Airton Senna</Text>

            <Image source={fotocapa} style={style.img}/>

            <Text style={style.conteudo}> conteudo </Text>


            <ScrollView>

                <Image source={imagem1} style={style.imgbox}/>
                <Text>conteudo</Text>

                <Image source={imagem2} style={style.imgbox}/>
                <Text>conteudo</Text>
                
                <Image source={imagem3} style={style.imgbox}/>
                <Text>conteudo</Text>

                <Image source={imagem4} style={style.imgbox}/>
                <Text>conteudo</Text>
            </ScrollView>


        </View>
 
    )
};