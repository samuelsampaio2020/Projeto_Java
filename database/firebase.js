
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCnpMn728qU5f455y9djOuzcyCVkeyBmoI",
  authDomain: "chave-roda.firebaseapp.com",
  databaseURL: "https://chave-roda-default-rtdb.firebaseio.com",
  projectId: "chave-roda",
  storageBucket: "chave-roda.appspot.com",
  messagingSenderId: "131551872561",
  appId: "1:131551872561:web:acf8af029554bcdfceb710"
};

let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

const database = firebase.firestore();
export default database

export { auth };
