import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  // apiKey: 'AIzaSyCev-C6AKuyxD8oXcGwuAyyGmWpo7INl3U',
  // authDomain: 'netflix-test01.firebaseapp.com',
  // databaseURL: 'https://netflix-test01.firebaseio.com',
  // projectId: 'netflix-test01',
  // storageBucket: 'netflix-test01.appspot.com',
  // messagingSenderId: '541152959854',
  // appId: '1:541152959854:web:38145f65984eef0cd3757f',


  apiKey: "AIzaSyBjbapMvqN8yIfjJ9ARAHt0v6TD97-6Jb4",
  authDomain: "netflix-fb6ed.firebaseapp.com",
  projectId: "netflix-fb6ed",
  storageBucket: "netflix-fb6ed.appspot.com",
  messagingSenderId: "576107812933",
  appId: "1:576107812933:web:2675eb1aeb512555356b2c",
  measurementId: "G-5104VHYQ0K",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
