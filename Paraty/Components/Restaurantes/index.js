import React from 'react';
import {View, Text, Image} from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import restaurante01 from '../../assets/restaurante01.png';
import restaurante02 from '../../assets/restaurante02.png';
import restaurante03 from '../../assets/restaurante03.png';

import style from './style';

export default function Restaurantes (){
    return(
        <View style={style.container}>
            <Text style={style.titulo}>Bares e Restaurante</Text>

            <Text style={style.descricao}>
            O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.
            </Text>

            <View style={style.cardbox}>
             <Image source = {restaurante01} style={style.img}/>
             <Text style={style.titulocard}>Armazén Mar</Text>
             <Text>Localização: Rod. Rio-Santos</Text>
            </View>

            <View style={style.cardbox}>
            <Image source = {restaurante02} style={style.img}/>
            <Text style={style.titulocard}>Bendita's Restaurante</Text>
            <Text>Localização: Centro Histórico</Text>
            </View>

            <View style={style.cardbox}>
            <Image source = {restaurante03} style={style.img}/>
            <Text style={style.titulocard}>Sereia do mar Pizza-Bar</Text>
            <Text>Localização: Praia do Jbaquara</Text>
            </View>
            
        </View>
    )
};
