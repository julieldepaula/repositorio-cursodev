import {StyleSheet} from 'react-native';

const style = StyleSheet.create ({

  container1:{
    flex: 1,
    backgroundColor: '#fff',
    
  },

  boxTitulo:{
    padding: 10,
  },

  Titulo:{
    fontSize: 22,
    fontWeight: 'bold',
    margin: 10,   
  },
  
  img:{
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10
  },

  conteudo:{
    fontWeight: "bold",
    color: '#757575',
    marginBottom: 20,
    
  },
  
  containerbox:{
    flexDirection: "row",
    marginBottom: 20,
    borderTopColor: '#d5d5d5',
    borderTopWidth: 1,
    borderBottomColor: '#d5d5d5',
    borderBottomWidth: 1,
  },
  
  imgbox:{
    width: 100,
    height: 100,
  },
  
  textobox:{
    flex: 1,
    padding: 10,
  },

  titulobox:{
    fontWeight: "bold",
    fontSize: 18,
  },
  
  conteudobox:{
    fontWeight: "bold",
    fontSize: 18,
    
  },
});

export default style;