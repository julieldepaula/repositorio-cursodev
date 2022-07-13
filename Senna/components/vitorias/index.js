import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import { FontAwesome5  } from '@expo/vector-icons';

import Imagem from '../../assets/corrida1.jpg';
import Vitoria1 from '../../assets/vitoria1.jpg';
import Vitoria2 from '../../assets/vitoria2.jpg';
import Vitoria3 from '../../assets/vitoria3.jpg';

import style from './style';

export default function TelaVitorias () {
    return (
    <ScrollView>  
    
      <ImageBackground source={ Imagem } style={style.Fundo} blurRadius={5}>

       <View style={style.container}>

           <Text style={style.titulo}>Senna em Números</Text>
           <Text style={style.descrição}>Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 65 pole positions.</Text>
          
           <View style={style.icones}>
            <FontAwesome5 name="trophy" color="#ceb105" size={25} />
            <Text style={style.numeros}>161</Text>
            <Text style={style.textoicone}>GPS DISPUTADOS</Text>
          </View>

          <View style={style.icones}>
            <FontAwesome5 name="trophy" color="#ceb105" size={25} />
            <Text style={style.numeros}>65</Text>
            <Text style={style.textoicone}>POLE POSITIONS</Text>
          </View>

          <View style={style.icones}>
            <FontAwesome5 name="trophy" color="#ceb105" size={25} />
            <Text style={style.numeros}>41</Text>
            <Text style={style.textoicone}>VITÓRIAS</Text>
          </View>

          <View style={style.icones}>
            <FontAwesome5 name="trophy" color="#ceb105" size={25} />
            <Text style={style.numeros}>3X</Text>
            <Text style={style.textoicone}>CAMPEÃO MUNDIAL</Text>
          </View>

       </View>

       <View style={style.containerbox}>           
           <Text style={style.titulobox}>Campeonato Mundial – 1988</Text>
           <Image source={Vitoria1} style={style.imgbox}/>
           
       </View>

       <View style={style.containerbox}>           
           <Text style={style.titulobox}>Campeonato Mundial – 1990</Text>
           <Image source={Vitoria2} style={style.imgbox}/>
           
       </View>

       <View style={style.containerbox}>           
           <Text style={style.titulobox}>Campeonato Mundial – 1991</Text>
           <Image source={Vitoria3} style={style.imgbox}/>
           
       </View>
       
      </ImageBackground>
      
    </ScrollView>
    )
};  