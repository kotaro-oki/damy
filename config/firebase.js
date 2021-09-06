import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB9HVB2ykWkkC6S1jC8TehbTqOrot3iFrY",
    authDomain: "originalchatapp-16c8b.firebaseapp.com",
    projectId: "originalchatapp-16c8b",
    storageBucket: "originalchatapp-16c8b.appspot.com",
    messagingSenderId: "759325003772",
    appId: "1:759325003772:web:eb7e03caaec26f2ca66c79"  
}

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

export default firebase