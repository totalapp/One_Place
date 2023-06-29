function logout1() {

firebase.auth.signOut().then(() => {

window.location.href = "login.html";

}).catch(() => {

alert('Erro ao Fazer LOGOUT');

})

}

function modal_ok() {
    
    window.location.href = "anmas.html";
}