import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4fbc3',            
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
        height: 150,
        borderRadius: 5,
        borderWidth: 1,
        borderColor:'black',
        marginBottom: 5,
        padding: 10
    },
    img:{
        alignSelf: 'center',
        width: 300,
        height: 80,        
    },
    titulocard:{
        fontSize: 16,
        fontWeight:'bold',
        textAlign: 'center',
        margin: 10,
    },
});

export default style;