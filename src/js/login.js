document.addEventListener('DOMContentLoaded', () => {

    const btnEntrar = document.getElementById('btn-entrar');
    const voltar = document.getElementById('voltar')

    if (voltar) {
        voltar.addEventListener('click', () => {
            location.href = "/index.html";
            console.log('chamou');
        });
    } 

    if (btnEntrar) {
        btnEntrar.addEventListener('click', (e) => {
            e.preventDefault();

            const formulario = document.querySelector('form');
            const camposObrigatorios = formulario.querySelectorAll('input[required]');

            let formularioValido = true;

            camposObrigatorios.forEach(campo => {
                if (!campo.value.trim()) {
                    campo.style.borderColor = 'red'; // destaca o campo
                    formularioValido = false;
                } else {
                    campo.style.borderColor = ''; // limpa borda se estiver OK
                }
            });

            if (!formularioValido) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Tudo OK → redireciona
            location.href = "/index.html";
        });
    }

    if (voltar) {
        voltar.addEventListener('click', () => {
            location.href = "/index.html";
        });
    }

})