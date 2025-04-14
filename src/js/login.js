document.addEventListener('DOMContentLoaded', () => {

    const entrar = document.getElementById('btn-entrar')
    const voltar = document.getElementById('voltar')
    const email = document.getElementById('txt_email_usuario')
    const senha = document.getElementById('senha')


    if (entrar) {
        entrar.addEventListener('click', (e) => {
            e.preventDefault(); // impede o envio

            // Verifica se os campos estão preenchidos
            if (!email.value.trim() || !senha.value.trim()) {
                alert("Preencha todos os campos!");
                return;
            }

            // Se tudo estiver preenchido, redireciona
            location.href = "/index.html";
            console.log('Formulário válido, redirecionando...');
        });
    }


    if (voltar) {
        voltar.addEventListener('click', () => {
            location.href = "/index.html";
            console.log('chamou');
        });
    }


})