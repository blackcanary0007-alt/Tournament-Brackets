// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtkcIh1RDxr25a1QSbIa5RCeQlTduBxpU",
  authDomain: "tournament-brackets-e9646.firebaseapp.com",
  databaseURL: "https://tournament-brackets-e9646-default-rtdb.firebaseio.com",
  projectId: "tournament-brackets-e9646",
  storageBucket: "tournament-brackets-e9646.firebasestorage.app",
  messagingSenderId: "625482336455",
  appId: "1:625482336455:web:b7d888ca2164bc58ff16e2",
  measurementId: "G-N170YBRLGJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = typeof firebase.auth === 'function' ? firebase.auth() : null;