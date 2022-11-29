import React, { useState } from "react";
import { View, CheckBox, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import  database  from "../../database/firebase";

const getFormattedPrice = (price) => `R$ ${price.toFixed(2)}`;
const getFormattedPrazo = (prazo) => `${prazo}`;

export const toppings = [
  {
    name: "Revisão",
    price: 400.00,
    prazo: 2
  },
  {
    name: "Lavagem",
    price: 105.00,
    prazo: 1
  },
  {
    name: "Troca de Óleo",
    price: 205.50,
    prazo: 1
  },
  {
    name: "Troca de Pneu",
    price: 600.45,
    prazo: 1
  },
];

export default function Diversos(){

  function Create(){
    database.collection("agendaDiversos").add({
      A_Placa: identificador,
      B_Servicos:toppings,
      C_ValorTotal:total,
      D_PrazoTotal:totalP,
      E_Comentario:comentario
    
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    navigation.navigate('Inicio')
  }
  const [comentario, setComentario] = useState('');
  const [identificador, setidentificador] = useState('');

  const navigation = useNavigation();

  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);
  const [totalP, setTotalP] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);

    const totalPrazo = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].prazo;
        }
        return sum;
      },
      0
    );
    setTotalP(totalPrazo);
  };

  return (
      

      <View style={styles.container}>

        <div style={styles.formatoInicio}>

          <Text style={styles.textoInicio}>Caminhão</Text>

        </div>

        <div style={styles.formato}>
        
        <div  style={styles.divEditCheckBox}>
          <Text style={styles.texto}>Serviço: </Text>

          {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>

              <div style={styles.divChekbox} className="toppings-list-item">

                <div  className="left-section">

                  <input style={styles.checkbox}
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />

                  <label style={styles.checkboxText} htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>

                <div style={styles.checkboxText} className="right-section">{getFormattedPrice(price)}</div>
                
              </div>
            </li>
          );
        })}
        </div>

        </div>

        <div style={styles.formato}>

          <Text style={styles.texto}>Placa Do Veiculo </Text>
          <TextInput 
            style={styles.campo}
            value={identificador}
            onChangeText={(identificador)=>{setidentificador(identificador)}}
            

            />

        </div>

        <div style={styles.formato}>

          <Text style={styles.texto}>Prazo (Em Horas): </Text>
          <div style={styles.pre}><Text style={styles.pretext}> {getFormattedPrazo(totalP)} </Text></div>

        </div>

        <div style={styles.formato}>

          <Text style={styles.texto}>Valor </Text>
          <div style={styles.pre}><Text style={styles.pretext}> {getFormattedPrice(total)} </Text></div>

        </div>

        <div style={styles.formato}>

          <Text style={styles.texto}>Comentários </Text>
          <TextInput
            style={styles.campo}
            value={comentario}
            onChangeText={(comentario)=>{setComentario(comentario)}}
            
            
            />

        </div>

        <div style={styles.formato}>

          <TouchableOpacity style={styles.botao} 
          onPress={Create}> 
          <Text style={styles.textoBotao}> Salvar </Text> 
          </TouchableOpacity>
          
        </div>

        <div style={styles.formato}>

          <TouchableOpacity style={styles.botao} 
          onPress={ () => navigation.navigate('Inicio')}>
          <Text style={styles.textoBotao}> Voltar </Text>
          </TouchableOpacity>
          
        </div>


        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    borderColor:'black',
    borderWidth:'5px'
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
    borderRadius:25,
    marginBottom:'10px'
  },
  
  divEditCheckBox:{
    backgroundColor:'black',
    borderRadius:'15px'
  },

  divChekbox:{
    width:250,
    height:30,
    margin:5,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  checkboxText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
  },

  texto:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    marginTop:5,
    marginBottom:5
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

  pre:{
    width:230,
    height: 35,
    backgroundColor:'black',
    borderRadius:15,
    paddingLeft:'10px',
    padding:10,
  },

  pretext:{
    color:'white',
    fontSize:22,
    fontWeight:'bold',
  },

  botao:{
    backgroundColor: 'black',
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