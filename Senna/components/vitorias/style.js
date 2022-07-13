import {StyleSheet} from 'react-native';

const style = StyleSheet.create ({

  Fundo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  
  container:{
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginBottom: 50,    
    
  },
  
  titulo:{
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  
  descrição:{
  color: '#fff',
  marginBottom: 20,
  },

  icones:{
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  }, 

  numeros:{
    color: '#eecb01',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 5,
  },

  textoicone:{
    color: '#a6a6a6',
    fontSize: 16,
  },

  containerbox:{
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginBottom: 20,
  },

  titulobox:{
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    padding: 15
    
  },

  imgbox:{
    height: 200,
    width: 300
    
  },
  
});

export default style;