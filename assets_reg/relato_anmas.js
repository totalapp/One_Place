const form = {
    //  date_i : () => document.getElementById('date_i'),
     date_e: () => document.getElementById('date_e'),
     date_eRequiredError: () => document.getElementById('date_e-reuired-error'),
     local: () => document.getElementById('local'),
     localRequiredError: () => document.getElementById('local-reuired-error'),
     ouro: () => document.getElementById('ouro'),
     setorRequiredError: () => document.getElementById('setor-reuired-error'),
     regras: () => document.getElementById('regras'),
     regrasRequiredError: () => document.getElementById('regras-reuired-error'),
     evento: () => document.getElementById('evento'),
     eventoRequiredError: () => document.getElementById('evento-reuired-error'),
     impacto: () => document.getElementById('impacto'),
     impactoRequiredError: () => document.getElementById('impacto-reuired-error'),
     descricao: () => document.getElementById('descricao'),
     descricaoRequiredError: () => document.getElementById('descricao-reuired-error'),
     acao: () => document.getElementById('acao'),
     acaoRequiredError: () => document.getElementById('acao-reuired-error'),
     stop_comentario: () => document.getElementById('stop_comentario'),
     stop: () => document.getElementById('stop'),
     stopRequiredError: () => document.getElementById('stop-reuired-error'),
     registerButton: () => document.getElementById('register-button')
 }

function onChangeDate_e() {
    const date_e = form.date_e().value;
    //   form.date_eRequiredError().style.display = !date ? "none" : "block";

    //  toggleRegisterButtonDisable();
}

//function onChangeDate_i() {
//   const date_i = new Date().toLocaleDateString("pt-BR");
   //   form.date_eRequiredError().style.display = !date ? "none" : "block";

    //  toggleRegisterButtonDisable();
//}

function onChangeLocal() {
    const local = form.local().value;
    //    form.localRequiredError().style.display = !local ? "none" : "block";

    //    toggleRegisterButtonDisable();
}

function onChangeOuro() {
    const setor = form.ouro().value;
    
 
   
}

function onChangeRegras() {
    const regras = form.regras().value;
    //    form.regrasRequiredError().style.display = !regras ? "none" : "block";

    //    toggleRegisterButtonDisable();
}

function onChangeEvento() {
    const evento = form.evento().value;
    
var valor = $("#evento").val();
									
											switch(evento){
													case "Acidente Fatal":
														//	alert("Entre em contato com o Número XX-XXXXXXX")
                                                            swal("Acidente Fatal", "Entre em contato IMEDIATAMENTE com seu Gestor e em seguida com o time de HSE", "error");
															break;
                                                            case "Acidente":
														//	alert("Entre em contato com o Número XX-XXXXXXX")
                                                            swal("Acidente", "Entre em contato IMEDIATAMENTE com seu Gestor e em seguida com o time de HSE", "error");
															break;
                                                            case "Quase Acidente (Near miss)":
														//	alert("Entre em contato com o Número XX-XXXXXXX")
                                                        swal("Quase Acidente (Near miss)", "Entre em contato IMEDIATAMENTE com seu Gestor e em seguida com o time de HSE", "error");
															break;
                                                            case "Derramamento / Vazamento":
														//	alert("Entre em contato com o Número XX-XXXXXXX")
                                                            swal("Derramamento / Vazamento", " - Caso identifique alto potencial para acidente ou vazamento, informe imediatamente seu Gestor e time de HSE", "error");
															break;
									
											}

}

function onChangeImpacto() {
    const impacto = form.impacto().value;
    //    form.impactoRequiredError().style.display = !impacto ? "none" : "block";

    //    toggleRegisterButtonDisable();
}

function onChangeDescricao() {
    const descricao = form.descricao().value;
    //    form.descricaoRequiredError().style.display = !descricao ? "none" : "block";

    //    toggleRegisterButtonDisable();
}

function onChangeAcao() {
    const acao = form.acao().value;
    //   form.acaoRequiredError().style.display = !acao ? "none" : "block";

    //   toggleRegisterButtonDisable();
}

function onChangeStop() {
    const stop = form.stop().value;
    //   form.stopRequiredError().style.display = !stop ? "none" : "block";

    //    toggleRegisterButtonDisable();
}

function onChangeStop_comentario() {
    const stop_comentario = form.stop_comentario().value;
    //   form.stopRequiredError().style.display = !stop ? "none" : "block";

    //    toggleRegisterButtonDisable();
}



function Relatos() {
    //showLoading();

    const Relatos = createRelatos();

    firebase.firestore()
        .collection('Relatos')
        .add(Relatos)
        .then(() => {
            window.location.href = "home_hsqe.html"
        
        })
        .catch(() => {

            alert('Erro ao Salvar o Relato')

        })
alert("Cadastro Realizado com Sucesso"); 
}

function createRelatos() {
    return {
        stop_comentario: form.stop_comentario().value,
        acao: form.acao().value,
      //  date_i: form.date_i().value,
        date_e: form.date_e().value,
        local: form.local().value,
         ouro : form.ouro().value,
        setor : form.regras().value,
        evento: form.evento().value,
        impacto : form.impacto().value,
        descricao: form.descricao().value,
       
        stop: form.stop().value,
        //   obs_stop : form.obs_stop().value
        user: {
            uid: firebase.auth().currentUser.uid
        }

    }

}

//location.href = "http://google.com";
//console.log(cadastra)
//}

