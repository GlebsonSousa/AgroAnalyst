document.addEventListener('DOMContentLoaded', () => {

    const entrar = document.getElementById('btn-entrar')
    const voltar = document.getElementById('voltar')

    if (entrar) {
        entrar.addEventListener('click', (e) => {
            e.preventDefault(); // evita envio do formulário
            location.href = "/index.html";
            console.log('clique');
        });
    }

    if (voltar) {
        voltar.addEventListener('click', () => {
            location.href = "/index.html";
            console.log('chamou');
        });
    }


})