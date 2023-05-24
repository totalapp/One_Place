

function onChangeNome() {
    const nome = form.nome().value;
    form.nomeRequiredError().style.display = nome ? "none" : "block";

    toggleRegisterButtonDisable();
}

function onChangeTel() {
    const telefone = form.telefone().value;
    form.telefoneRequiredError().style.display = telefone ? "none" : "block";

    toggleRegisterButtonDisable();
}

function onChangeDir() {
    const diretoria = form.diretoria().value;
    form.diretoriaRequiredError().style.display = diretoria ? "none" : "block";

    toggleRegisterButtonDisable();
}

function onChangeGestor() {
    const  gestor = form.gestor().value;
    form.gestorRequiredError().style.display =  gestor ? "none" : "block";

    toggleRegisterButtonDisable();
}

function onChangeEmail() {
    const  email = form.email().value;
    form.emailRequiredError().style.display =  email ? "none" : "block";

    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";

    toggleRegisterButtonDisable();
}

function onChangePassword() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";

    form.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";

    validatePasswordsMatch();
    toggleRegisterButtonDisable();
}

function onChangeConfirmPassword() {
    validatePasswordsMatch();
    toggleRegisterButtonDisable();
}

function validatePasswordsMatch() {
    const password = form.password().value;
    const confirmPassword = form.confirmPassword().value;

    form.confirmPasswordDoesntMatchError().style.display =
        password == confirmPassword ? "none" : "block";
}

function toggleRegisterButtonDisable() {
    form.registerButton().disabled = !isFormValid();
}

function isFormValid() {
    const email = form.email().value;
    if (!email || !validateEmail(email)) {
        return false;
    }

    const password = form.password().value;
    if (!password || password.length < 6) {
        return false;
    }

    const confirmPassword = form.confirmPassword().value;
    if (password != confirmPassword) {
        return false;
    }

    return true;
}

const form = {
    confirmPassword: () => document.getElementById('confirmPassword'),
    confirmPasswordDoesntMatchError: () => document.getElementById('password-doesnt-match-error'),
    email: () => document.getElementById('email'),
    nome: () => document.getElementById('nome'),
    telefone: () => document.getElementById('tel'),
    gestor: () => document.getElementById('gestor'),
    diretoria: () => document.getElementById('dir'),
    emailRequiredError: () =>  document.getElementById('email-required-error'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    nomeRequiredError: () => document.getElementById('nome-required-error'),
    telefoneRequiredError: () => document.getElementById('telefone-required-error'),
    diretoriaRequiredError: () => document.getElementById('diretoria-required-error'),
    gestorRequiredError: () => document.getElementById('gestor-required-error'),
    password: () => document.getElementById('password-field'),
    passwordMinLengthError: () => document.getElementById('password-min-length-error'),
    passwordRequiredError: () => document.getElementById('password-required-error'),
    registerButton: () => document.getElementById('register-button')
}

function cadastrar(){
//showLoading();
 const email = form.email().value;
 const password = form.password().value;

 firebase.auth().createUserWithEmailAndPassword(
    email, password
    ).then(data => {
     
      const uid = data.user.uid;
console.log(data);
     const users = firebase.firestore().collection('Users');
      users.doc(uid)
      .set( {
        //  console.log("yes")
        Nome: form.nome().value,
        Telefone: form.telefone().value,
        Gestor : form.gestor().value,
        Diretoria : form.diretoria().value,
        email : form.email().value,
      });

      alert('Conta Criada com sucesso');
       window.location.href = "home_hsqe.html";

    })
      .catch(() => {

          alert('Erro ao Salvar o Relato')

      })

        

   .catch(error => {
      //  hideLoading();
        alert(getErrorMessage(error));
    })
}
function getErrorMessage(error) {
    if(error.code == "auth/email-already-in-use") {
        return "Email já cadastrado"
    }
    return error.message;
}




