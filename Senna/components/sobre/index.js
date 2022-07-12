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

          <View style={style.boxTitulo}>

            <Text style={style.Titulo}>Airton Senna</Text>

            <Image source={fotocapa} style={style.img}/>

            <Text style={style.conteudo}>
             No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial. 
            </Text>
          </View>

            <ScrollView>
                <View  style={style.containerbox}>
                  <Image source={imagem1} style={style.imgbox}/>
                   <View style={style.textobox}>
                    <Text style={style.titulobox}>Rei da chuva</Text>
                    <Text>
                     Aprimorou a pilotagem no asfalto molhando e mostrou ser um piloto de determinação, garra e persistência.
                    </Text>
                   </View>
                </View>

                <View  style={style.containerbox}>
                  <Image source={imagem2} style={style.imgbox}/>
                   <View style={style.textobox}> 
                    <Text style={style.titulobox}>Rei de Monaco</Text>
                    <Text>
                    Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.
                    </Text>
                   </View>
                </View>
                
                <View  style={style.containerbox}>
                  <Image source={imagem3} style={style.imgbox}/>
                   <View style={style.textobox}>
                    <Text style={style.titulobox}>silvastone</Text>
                    <Text>
                     Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.
                    </Text>
                   </View>
                </View>

                <View  style={style.containerbox}>
                  <Image source={imagem4} style={style.imgbox}/>
                  <View style={style.textobox}>
                   <Text style={style.titulobox}>preparacao</Text>
                   <Text>
                    Para vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.
                    </Text>
                   </View>
                 </View>
                 
            </ScrollView>


        </View>
 
    )
};