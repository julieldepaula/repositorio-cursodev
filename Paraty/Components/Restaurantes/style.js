import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ele3e4',
        padding: 20,
    },
    
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
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
        height: 160,
        borderRadius: 5,
        borderWidth: 1,
        borderColor:'979797',
        marginBottom: 10,
        padding:5
    },
    titulocard:{
        fontWeight:'bold'
    },
    img:{
        alignSelf: 'center',
        width: 300,
        height: 80,   
        marginBottom: 5     
    },
   
});

export default style;