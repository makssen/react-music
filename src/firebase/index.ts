import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB7ziz0MB-bc_5zMMpyYJqRgzifPWxOypg",
    authDomain: "music-app-6db87.firebaseapp.com",
    projectId: "music-app-6db87",
    storageBucket: "music-app-6db87.appspot.com",
    messagingSenderId: "1004551173521",
    appId: "1:1004551173521:web:9414da26b7bd584fab5630"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };