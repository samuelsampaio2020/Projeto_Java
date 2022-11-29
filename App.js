import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/logar/login';
import Cadastro from './src/logar/cadastro';
import EsqueciSenha from './src/logar/esqueciSenha';
import Inicio from './src/servicos/home';
import Carro from './src/servicos/Carro';
import Bicicleta from './src/servicos/Bicicleta';
import Moto from './src/servicos/Moto';
import Diversos from './src/servicos/Diversos';

import firebase from 'firebase';
import firebaseConfig from './database/firebase';


const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EsqueciSenha"
        component={EsqueciSenha}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Carro"
        component={Carro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Moto"
        component={Moto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bicicleta"
        component={Bicicleta}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Diversos"
        component={Diversos}
        options={{ headerShown: false }}
      />
      
      
    </Stack.Navigator>
  );
}

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}
