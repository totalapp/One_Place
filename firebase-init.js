const firebaseConfig = {
    apiKey: "AIzaSyBmLxKAi8dPAAP8wUUj7YrNx4Q4bjQVi1g",
    authDomain: "one-palce.firebaseapp.com",
    projectId: "one-palce",
    storageBucket: "one-palce.appspot.com",
    messagingSenderId: "958901887552",
    appId: "1:958901887552:web:08e47d0ba3d1abfba735a5",
    measurementId: "G-96JB3MCJ8T"
    };
    firebase.initializeApp(firebaseConfig);

    import firebase from "firebase/app";
    import "firebase/messaging";

    const messaging = firebase.messaging();

    console.log('antes');
    firebase.auth().signInWithEmailAndPassword("paulorsaf@gmail.com", "123456").then(response => {
        console.log('success', response)
    }).catch(error => {
        console.log('error', error)
    });
    console.log('depois')