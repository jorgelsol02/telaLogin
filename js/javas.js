   
function validarLogin() {

    var condicao = false;
    var loginCerto = logUser1;
    var senhaCerta = PasUser1;
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    
    if (login.length == 0){
        alert('Digite seu login.')
    } else if ( senha.length == 0){
        alert ('Digite sua senha.')
    }else if(login == loginCerto && senha == senhaCerta){
        alert('Login realizado com sucesso!')
        window.location.href = "bem-vindo.html";
        
        return true;
    }else if(login == loginCerto && senha != senhaCerta){
        alert('Senha incorreta. Tente novamente.')
    }else{
        alert('Usuário não cadastrado!')
    }
}

function realizarCadastro(){
    var logUser1 = document.getElementById('emailCad').value; 
    var PasUser1 = document.getElementById('senhaCad').value; 
    alert('Usuário Cadastrado!')
    window.location.href = "index.html";
}

function telaCadastro(){
    window.location.href = "cadastro.html"
}