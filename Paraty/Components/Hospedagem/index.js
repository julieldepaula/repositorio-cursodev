import React from 'react';
import {View, Text, Image} from 'react-native';
import hospedagem01 from '../../assets/hospedagem01.png';
import hospedagem02 from '../../assets/hospedagem02.png';
import hospedagem03 from '../../assets/hospedagem03.png';
import style from './style';

export default function Hospedagem (){
    return(
        <View style={style.container}>

            <Text style={style.titulo}>Pousadas e Hotéis em Paraty</Text>
            <Text style={style.descricao}> 
            Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.
            </Text>

            <View style={style.cardbox}>
            <Image source = {hospedagem01} style={style.img}/>
            <Text style={style.titulocard}>Pousada Missanga</Text>
            <Text style={style.descricaocard}> valor médio: R$350,00</Text>
            <Text style={style.descricaocard}> Localização: Próx. à Av. Roberto Silveira</Text>
            </View>

            <View style={style.cardbox}>
            <Image source = {hospedagem02} style={style.img}/>
            <Text style={style.titulocard}>Pousada Morro do Forte</Text>
            <Text style={style.descricaocard}> valor médio: R$450,00</Text>
            <Text style={style.descricaocard}> Localização: Próximo à Praia - Pontal</Text>
            </View>

            <View style={style.cardbox}>
            <Image source = {hospedagem03} style={style.img}/>
            <Text style={style.titulocard}>Pousada Porto Imperial</Text>
            <Text style={style.descricaocard}> valor médio: R$550,00</Text>
            <Text style={style.descricaocard}> Localização: Centro Histórico</Text>
            </View>

        </View>
    )
};
