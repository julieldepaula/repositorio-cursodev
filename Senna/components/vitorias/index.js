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
    
      <ImageBackground source={ Imagem } style={{flex:1}} blurRadius={5} >

       <View>
           <Text>Senna em Números</Text>
           <Text>Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 65 pole positions.</Text>
          
           <View>
            <FontAwesome5 name="trophy" color="#ceb105" size={25} />
            <Text>161</Text>
            <Text>GPS DISPUTADOS</Text>
          </View>

          <View>
            <FontAwesome5 name="trophy" color="#ceb105" size={25} />
            <Text>65</Text>
            <Text>POLE POSITIONS</Text>
          </View>

          <View>
            <FontAwesome5 name="trophy" color="#ceb105" size={25} />
            <Text>41</Text>
            <Text>VITÓRIAS</Text>
          </View>

          <View>
            <FontAwesome5 name="trophy" color="#ceb105" size={25} />
            <Text>3X</Text>
            <Text>CAMPEÃO MUNDIAL</Text>
          </View>

       </View>

       <View>
           <Image source={Vitoria1}/>
           <Text>Campeonato Mundial – 1988</Text>
           
       </View>

       <View>
           <Image source={Vitoria2}/>
           <Text>Campeonato Mundial – 1990</Text>
           
       </View>

       <View>
           <Image source={Vitoria3}/>
           <Text>Campeonato Mundial – 1991</Text>
           
       </View>
       
      </ImageBackground>
      
    </ScrollView>
    )
};  