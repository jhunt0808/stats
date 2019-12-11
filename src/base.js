import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDiYJcsuzpbJazWaXdFhu6WM6qSosFVowc",
    authDomain: "stats-6fd51.firebaseapp.com",
    databaseURL: "https://stats-6fd51.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;