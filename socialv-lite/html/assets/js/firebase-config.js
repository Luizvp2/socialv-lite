// Importando as funções que você precisa
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Sua configuração do Firebase (os dados são fornecidos pelo seu projeto no Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyDj2qR8qwKw7Q8qXnDAq70NewjXpsK4KUg",
  authDomain: "cuidar-62827.firebaseapp.com",
  projectId: "cuidar-62827",
  storageBucket: "cuidar-62827.appspot.com",
  messagingSenderId: "1016324859932",
  appId: "1:1016324859932:web:6a44edca308b8d984957d9",
  measurementId: "G-9BG2GDS4ME"
};

// Inicializando o Firebase com a configuração
const app = initializeApp(firebaseConfig);

// Inicializando o Firebase Analytics (se necessário)
const analytics = getAnalytics(app);

// Inicializando outros produtos do Firebase que você deseja usar, como Firestore e Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Agora você pode usar os serviços do Firebase, como db, auth, analytics, etc.
