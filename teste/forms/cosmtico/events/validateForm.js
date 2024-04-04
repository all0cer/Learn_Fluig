function validateForm(form){
    var msg = "";
    if(form.getValue("inserirNome") == ""){
        msg += "O campo Nome não pode estar vazio"
    }
    if(form.getValue("inserirEmail") == ""){
        msg += "O campo Email não pode estar vazio"
    }
    if(form.getValue("inserirSenha") == ""){
        msg += "O campo Senha não pode estar vazio"
    }
    if(form.getValue("inserirCPF") == ""){
        msg += "O campo CPF não pode estar vazio"
    }
    if(msg != ""){
        throw msg;
    }

}