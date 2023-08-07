
function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function login() {
    //showLoading();
    // const spanUserInfo = document.querySelector('span.user-info');
   // firebase.auth().signInWithEmailAndPassword(
   //     form.email1().value, form.password1().value
 //   ).then(async (data) => {
 //       const uid = data.user.uid;
 //       try {
 //           const doc = await firebase.firestore().doc(`Users/${uid}`).get();
 //           spanUserInfo.innerHTML = JSON.stringify(doc.data());
  //          window.location.href = "home_hsqe.html";
   //     } catch (e) {
   //         spanUserInfo.innerHTML = `Error: ${e}`;
   //     }
 //   })
// const buttonLogin = document.querySelector('button[name=sign-in]');
 const spanUserInfo = document.querySelector('span.user-info');

     const formData = {
         email: document.querySelector('input[name=email]').value,
         senha: document.querySelector('input[name=password]').value,
     };

     firebase.auth().signInWithEmailAndPassword(formData.email, formData.senha).then(async (data) => {
         const uid = data.user.uid;
         try {
             const doc = await firebase.firestore().doc(`users/${uid}`).get();
             spanUserInfo.innerHTML = JSON.stringify(doc.data());
             window.location.href = "home_hsqe.html";
         } catch (e) {
             spanUserInfo.innerHTML = `Error: ${e}`;
         }
     });

//});


}



function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário não encontrado";
    }
    if (error.code == " auth/wrong-password") {
        return "Senha Incorreta";
    }
    return error.message;
}

function register() {
    
    window.location.href = "cadastro.html";
}

function register_() {
    
    window.location.href = "./cadastro_mobile.html";
}


function toggleEmailErrors() {
    const email = form.email1().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password1().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    form.recoverPasswordButton().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = form.email1().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    return form.password1().value ? true : false;
}

const form = {
    email1: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password1: () => document.getElementById("password-field"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
} 

function logout() {

    firebase.auth().signOut().then(() => {
	
	window.location.href = "home.html";
	
	}).catch(() => {
	
	alert('Erro ao Fazer LOGOUT');
	
	})
	
	}

    function logout_m() {

        firebase.auth().signOut().then(() => {
        
        window.location.href = "../../mobile/home_mobile.html";
        
        }).catch(() => {
        
        alert('Erro ao Fazer LOGOUT');
        
        })
        
        }
	
	function modal_ok() {
		
		window.location.href = "anmas.html";
	}
