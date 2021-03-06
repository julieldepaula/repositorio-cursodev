import React from 'react';
import {View, Text, Image, Button, ImageBackground} from 'react-native';
import telaprincipal from '../../assets/TelaPrincipal.png';
import style from './style';

export default function TelaPrincipal (props){
    return(
     <ImageBackground source = {telaprincipal} style={style.container1}>

            <View style={style.container2}>
                <Text style={style.titulo}>Paraty</Text>
                <Text style={style.descricao}>Saiba o que visitar em paraty.</Text>               

                <View style={style.buttom}>
                <Button title="Restaurantes" onPress={ () => props.navigation.navigate('Restaurantes')} color="#372d00"/>
                </View>
                <View style={style.buttom}>
                <Button title="Passeios" onPress={ () => props.navigation.navigate('Passeios')} color="#372d00"/>
                </View>
                <View style={style.buttom}>
                <Button title="Hospedagem" onPress={ () => props.navigation.navigate('Hospedagem')} color="#372d00"/>           
                </View>

            </View>

    </ImageBackground>
    )
};
