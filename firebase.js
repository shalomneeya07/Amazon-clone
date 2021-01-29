import firebase from"firebase";
 
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCxKyah7JszOgs6ZnUpQH2t7dxzgrbeb2o",
    authDomain: "clone-e6429.firebaseapp.com",
    databaseURL: "https://clone-e6429.firebaseio.com",
    projectId: "clone-e6429",
    storageBucket: "clone-e6429.appspot.com",
    messagingSenderId: "955802367809",
    appId: "1:955802367809:web:acc8fbdb431e4c039413c0",
    measurementId: "G-1LPVBV6HBQ"

});

const auth = firebase.auth();

export {auth};