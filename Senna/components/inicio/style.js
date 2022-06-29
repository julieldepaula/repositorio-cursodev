import {StyleSheet} from 'react-native';

const style = StyleSheet.create ({
  Fundo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  
  img:{
    alignSelf: 'center',
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    
  },
  
  container:{
    backgroundColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    width: 350,
    heigth: 300,
    margin: 20,
    borderRadius: 10,
    
  },
  
  titulo:{
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    
  },
  
  descrição:{
    fontSize: 16,
    color: 'white',
    padding: 10

  },
});

export default style;