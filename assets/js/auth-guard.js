firebase.auth().onAuthStateChanged(function(user){
    if (!user) {
        window.location.href = "../OnePlace/login/login.html";
    } 
    })