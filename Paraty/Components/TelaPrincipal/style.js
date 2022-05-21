import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container1:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',            
    },
    container2:{
        backgroundColor: 'white',
        width: 320,
        height: 230,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '979797'
    },
    titulo:{
        fontSize: 26,
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom: 5
    },
    descricao:{
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10
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
        padding: 5
    },
});

export default style;