import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'ele3e4',               
    },
    container2:{
        backgroundColor: 'white',
        width: 320,
        height: 500,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '979797'
    },
    titulo:{
        fontSize: 26,
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    descricao:{
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    },
    img:{
        alignSelf: 'center',
        width: 300,
        height: 200,
        padding: 10,
        marginBottom: 20   
    },
    buttom:{
        borderRadius: 15,
        marginBottom: 5,
        padding: 8
    },
});

export default style;