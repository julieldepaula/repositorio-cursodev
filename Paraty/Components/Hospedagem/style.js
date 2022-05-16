import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'beceff',           
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    descricao:{
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 20,
        marginHorizontal: 10
    },
    cardbox:{
        backgroundColor: '#fff',
        width: 320,
        height: 140,
        borderRadius: 5,
        borderWidth: 1,
        borderColor:'979797',
        marginBottom: 5,
        padding: 10
    },
    img:{
        alignSelf: 'center',
        width: 300,
        height: 50,  
        marginBottom: 10      
    },
    titulocard:{
        fontSize: 16,
        fontWeight:'bold',
        marginBottom: 5
        
    },
    descricaocard:{
        fontSize:10,


    },
});

export default style;