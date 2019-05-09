import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyATB4QIVdmND2sBn3VQUeNCUMigVU6shZ0',
  authDomain: 'conosco-8f335.firebaseapp.com',
  databaseURL: 'https://conosco-8f335.firebaseio.com',
  projectId: 'conosco-8f335',
  storageBucket: 'conosco-8f335.appspot.com',
  messagingSenderId: '1032773802921',
  appId: '1:1032773802921:web:32ec4b6105d03824'
};

firebase.initializeApp(firebaseConfig);

export default firebase;