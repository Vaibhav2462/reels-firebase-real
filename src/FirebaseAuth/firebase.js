import firebaseConfig from '../secrets';
// import firebase from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import 'firebase/auth';
import 'firebase/compat/storage';
// import 'firebase/firestore';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const storage = firebase.storage();

export const database = {
    users: firestore.collection('users'),
    posts: firestore.collection('posts')
}

export default firebase;