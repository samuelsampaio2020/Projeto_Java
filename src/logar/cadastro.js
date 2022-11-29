import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native'

import firebase from 'firebase';


export default class Cadastar extends Component {

  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
 

  registerUser = ()=>{
    if(this.state.email==="" && this.state.password===""){
      alert('Insira detalhes para se inscrever!');
    }else{
      this.setState({
        isLoading: true
      })

      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res)=>{
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        
        alert("Usuario registrado com sucesso!")
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
        
      })

      .catch(error => this.setState({ errorMessage: error.message }))

    }
  }

  render(){
  if(this.state.isLoading){
    return(
      <View style={styles.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E"/>
      </View>
    )
  }
  
  return (
      <View style={styles.container}>

        <div style={styles.formatoInicio}>

          <Text style={styles.textoInicio}>Cadastre-se</Text>

        </div>

        <div style={styles.formato}>
        
          <Image source={require('../../assets/logo.png')} style={styles.img} />

        </div>

        <div style={styles.formato}>
          
          <TextInput style={styles.campo} placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />

        </div>

        <div style={styles.formato}>
          
          <TextInput style={styles.campo} placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />

        </div>

        <div style={styles.formato}>

          <TextInput style={styles.campo} placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />

        </div>

        <div style={styles.formato}>

          <TouchableOpacity style={styles.botao} onPress={() => this.registerUser()}> 
          <Text style={styles.textoBotao}> Cadastrar </Text> 
          </TouchableOpacity>
          
        </div>

        <div style={styles.formato}>

          <TouchableOpacity style={styles.botao} onPress={ () => this.props.navigation.navigate('Login') }> 
          <Text style={styles.textoBotao}> Voltar </Text> 
          </TouchableOpacity>
          
        </div>
        
        <div style={styles.alinharFooter}>
          <Image source={require('../../assets/footer.png')} style={styles.footer} />
        </div>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth:'5px'
  },
  
  textoInicio:{
    color:'#black',
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
    backgroundColor:'gray',
    borderRadius:25,
  },

  img:{
    width:260,
    height:160,
    margin:30,
    alignItems:'center',
  },

  textoBotao:{
    color:'white',
    fontSize:22,
    fontWeight:'bold'
  },

  formato:{
    alignSelf:'center',
    margin:10,
    display:'grid',

  },

  campo:{
    width:250,
    height: 50,
    backgroundColor:'black',
    borderRadius:15,
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:'10px'
  },

  botao:{
    backgroundColor: 'black',
    width:'150px',
    height:'50px',
    justifyContent:'center',
    alignItems:'center',
    fontSize: 22,
    lineHeight: 15,
    borderRadius:'15px',
    margin: '5px',
    color:'#000',
    marginBottom:5
  },
  alinharFooter:{
    flex:1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  footer:{
    flex:1,
    resizeMode:'stretch',
    width:'100%',
    height:'250px',
    marginTop:'40px',
    alignSelf:'flex-end'
  }

});