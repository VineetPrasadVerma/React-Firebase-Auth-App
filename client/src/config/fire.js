import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA3CtKO2d438cN2PTCuw0sheYKELT0rs4c',
  authDomain: 'react-firebase-auth-483de.firebaseapp.com',
  databaseURL: 'https://react-firebase-auth-483de.firebaseio.com',
  projectId: 'react-firebase-auth-483de',
  storageBucket: 'react-firebase-auth-483de.appspot.com',
  messagingSenderId: '568073690933',
  appId: '1:568073690933:web:03da2a313b6674d277b67c'
}

const fire = firebase.initializeApp(firebaseConfig)

export default fire
