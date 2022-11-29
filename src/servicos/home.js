import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

import firebase from 'firebase';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {

  this.setState = { 
    displayName: firebase.auth().currentUser.displayName,
    uid: firebase.auth().currentUser.uid
  }

  return (
      <View style={estilo.container}>

        <div style={estilo.formatoInicio}>
          <Text style={estilo.textoInicio}>Serviços</Text>
        </div>
        
        <View style={estilo.containerCard}>
        <div style={estilo.org}> 
        <div style={estilo.card}>
        
          <div>
            <Text style={estilo.titulo}> CARROS </Text>
          </div>

          <Image source={require('../../assets/carro.jpg')} style={estilo.image} />
          <div style={estilo.botaoRight}>
          <TouchableOpacity style={estilo.btn} onPress={ () => this.props.navigation.navigate('Carro')} >Consultar</TouchableOpacity> 
          </div>
        </div>
        
        <div style={estilo.card}>
          <Text style={estilo.titulo}> MOTOS </Text>
          <Image source={require('../../assets/moto.jpg')} style={estilo.image} />
          <div style={estilo.botaoRight}>
            <TouchableOpacity style={estilo.btn} onPress={ () => this.props.navigation.navigate('Moto')} >Consultar</TouchableOpacity> 
          </div>
        </div>
        
        <div style={estilo.card}>
          <Text style={estilo.titulo}> BICICLETAS </Text>
          <Image source={require('../../assets/bicicleta.jpg')} style={estilo.image} />
          <div style={estilo.botaoRight}>
            <TouchableOpacity style={estilo.btn} onPress={ () => this.props.navigation.navigate('Bicicleta')} >Consultar</TouchableOpacity> 
          </div>
        </div>

        <div style={estilo.card}>
          <Text style={estilo.titulo}> CARRETAS </Text>
          <Image source={require('../../assets/Carreta.jpg')} style={estilo.image} />
          <div style={estilo.botaoRight}>
            <TouchableOpacity style={estilo.btn} onPress={ () => this.props.navigation.navigate('Diversos')} >Consultar</TouchableOpacity> 
          </div>
        </div>
      </div>
    </View>

        <div style={estilo.formato}>

          <TouchableOpacity style={estilo.botao} onPress={() => this.signOut()}> 
          <Text style={estilo.textoBotao}> Desconectar </Text> 
          </TouchableOpacity>
          
        </div>

        </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    borderColor:'black',
    borderWidth:'5px'
  },

  containerCard: {
    backgroundColor: 'gray',
    flexWrap: 'wrap',
    flex: '1px',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },  

  textoInicio:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    alignSelf:'center',
  },

  formatoInicio:{
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    display:'grid',
    width:300,
    height:30,
    backgroundColor:'black',
    borderRadius:"0  0 25px 25px ",
  },

  org:{
    display: 'contents',
  },

  card:{
    backgroundColor: 'black',
    width: '170px',
    height: '230px',
    border: '5px solid #000',
    padding: '5px',
    borderRadius: '20px',
    margin: '16px',

    alignItems: 'center',
  },

  titulo:{
    fontSize: '18px',
    lineHeight: '54px',
    color: 'white',
    marginLeft:'45px'
  },
  image: {
    marginRight: '24px',
    width: '170px',
    height: '100px',
    borderRadius: '10px',
  },

  btn:{
    color: 'white',
    backgroundColor: 'gray',
    textAlign: 'center',
    width: '100px',
    borderRadius: '5px',
    marginTop: '35px',
    marginLeft: '35px',
  },

  textoBotao:{
    color:'white',
    fontSize:22,
    fontWeight:'bold'
  },

  formato:{
    alignSelf:'center',
    margin:2,
    display:'grid',

  },

  botao:{
    backgroundColor: 'gray',
    width:'150px',
    height:'40px',
    justifyContent:'center',
    alignItems:'center',
    fontSize: 22,
    lineHeight: 15,
    borderRadius:'15px',
    margin: 10,
    color:'#000',
  },

});