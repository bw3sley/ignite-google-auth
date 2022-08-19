import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDymDuXfo6Y-1UOFpR2tw0kvMEMaUf8lXU",
  authDomain: "auth-5bf49.firebaseapp.com",
  projectId: "auth-5bf49",
  storageBucket: "auth-5bf49.appspot.com",
  messagingSenderId: "706370012277",
  appId: "1:706370012277:web:03a9ed2a6c4e79964d243c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);