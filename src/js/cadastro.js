document.addEventListener('DOMContentLoaded', () => {
    const voltar = document.getElementById('voltar');
    const btnContinuar = document.getElementById('btnContinuar');
    const btnConfirmar = document.getElementById('btn-confirmar');

    const cadastro1 = document.querySelector('.cadastro1');
    const cadastro2 = document.querySelector('.cadastro2');

    // Voltar para a página inicial
    if (voltar) {
        voltar.addEventListener('click', () => {
            location.href = "/index.html";
        });
    }

    // Valida os campos da primeira etapa antes de mudar para a segunda
    if (btnContinuar) {
        btnContinuar.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o envio do formulário

            const formulario1 = cadastro1.querySelector('form');
            const camposObrigatorios = formulario1.querySelectorAll('input[required]');
            let formularioValido = true;

            camposObrigatorios.forEach(campo => {
                if (!campo.value.trim()) {
                    campo.style.borderColor = 'red'; // Destaca o campo vazio
                    formularioValido = false;
                } else {
                    campo.style.borderColor = ''; // Limpa a borda quando o campo é válido
                }
            });

            if (!formularioValido) {
                alert('Por favor, preencha todos os campos obrigatórios da primeira etapa.');
                return;
            }

            // Se todos os campos estiverem válidos, oculta a primeira etapa e exibe a segunda
            cadastro1.style.display = 'none';
            cadastro2.style.display = 'flex';
        });
    }

    // Valida a etapa de confirmação (segunda parte)
    if (btnConfirmar) {
        btnConfirmar.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o envio do formulário

            const formulario2 = cadastro2.querySelector('form');
            const camposObrigatorios = formulario2.querySelectorAll('input[required]');
            let formularioValido = true;

            camposObrigatorios.forEach(campo => {
                if (!campo.value.trim()) {
                    campo.style.borderColor = 'red'; // Destaca o campo vazio
                    formularioValido = false;
                } else {
                    campo.style.borderColor = ''; // Limpa a borda quando o campo é válido
                }
            });

            if (!formularioValido) {
                alert('Por favor, preencha todos os campos obrigatórios da segunda etapa.');
                return;
            }

            // Verifica se as senhas batem
            const senha = document.querySelector('[name="txt_senha_usuario"]');
            const confirmarSenha = document.querySelector('[name="txt_senha_confirma"]');

            // Se as senhas coincidem, o cadastro está pronto e o redirecionamento ocorre
            // Armazena as informações no Local Storage
            const email = document.querySelector('[name="txt_email_usuario"]').value;
            const senhaUsuario = senha.value;
            
            localStorage.setItem('usuarioEmail', email);  // Armazenando o email no localStorage
            localStorage.setItem('usuarioSenha', senhaUsuario);  // Armazenando a senha no localStorage

            alert('Cadastro realizado com sucesso!');

            // Redireciona para a página inicial
            location.href = "/index.html";
        });
    }
});
