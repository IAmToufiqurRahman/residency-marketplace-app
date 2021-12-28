import { initializeApp } from 'firebase/app'
import { getFireStore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQZBShG67w6o2yz_zSDRjLcnKt9Ok9YNc',
  authDomain: 'residency-marketplace-app.firebaseapp.com',
  projectId: 'residency-marketplace-app',
  storageBucket: 'residency-marketplace-app.appspot.com',
  messagingSenderId: '42357413208',
  appId: '1:42357413208:web:690ead6d58f3af27cc412d'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFireStore()
