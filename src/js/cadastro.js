document.addEventListener('DOMContentLoaded', () => {
    const btnContinuar = document.getElementById('btn-continuar');
    const btnConfirmar = document.getElementById('btn-confirmar');
    const voltar = document.getElementById('voltar');

    const mudaParaCadastro2 = document.getElementById('btn-continuar')
    const confirmar = document.getElementById('btn-confirmar')
    const cadastro1 = document.querySelector('.cadastro1')
    const cadastro2 = document.querySelector('.cadastro2')
    


    // CAMPOS DA PRIMEIRA ETAPA 
    const nome = document.getElementById('txt_nome_usuario');
    const email = document.getElementById('txt_email_usuario');
    const dataNasc = document.getElementById('dte_nasc_usuario');
    const cpf = document.getElementById('num_cpf_usuario');
    const telefone = document.getElementById('num_tell_usuario');

    // CAMPOS DA SEGUNDA ETAPA (corrigidos via JS porque no HTML está incompleto)
    const senha = document.getElementById('txt_senha_usuario');
    const confirmarSenha = document.getElementById('Confirme a senha');
    const emailRecuperacao = document.getElementById('Txt_confirma_email');

    // Botão CONTINUAR — valida a primeira parte
    if (btnContinuar) {
        btnContinuar.addEventListener('click', () => {
            if (
                !nome.value.trim() ||
                !email.value.trim() ||
                !dataNasc.value.trim() ||
                !cpf.value.trim() ||
                !telefone.value.trim()
            ){
                alert("Preencha todos os campos da primeira etapa!");
                return;
            }

            console.log("Primeira etapa válida!");
            mudaParaCadastro2.addEventListener('click', () => {
                cadastro1.style.display = 'none';
                cadastro2.style.display = 'flex';
            })
        });
    }

    // Botão CONFIRMAR — valida a segunda parte
    if (btnConfirmar) {
        btnConfirmar.addEventListener('click', (e) => {
            e.preventDefault(); // impede o envio automático

            if (
                !senha.value.trim() ||
                !confirmarSenha.value.trim() ||
                !emailRecuperacao.value.trim()
            ) {
                alert("Preencha todos os campos da segunda etapa!");
                return;
            }

            console.log("Cadastro completo. Redirecionando...");
            alert("Cadastro realizado com sucesso!");
            window.location.href = "/index.html";
        });
    }

    // Botão VOLTAR
    if (voltar) {
        voltar.addEventListener('click', () => {
            window.location.href = "/index.html";
        });
    }
});




/*
document.addEventListener('DOMContentLoaded', () => {

    
    

    voltar.addEventListener('click', () => {
        location.href = "/index.html"
        console.log('chamou')
    })

    

    confirmar.addEventListener('click', () => {
        location.href = "/index.html"
    })

})*/