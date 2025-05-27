document.addEventListener('DOMContentLoaded', () => {

    const voltar = document.getElementById('voltar')
    const mudaParaCadastro2 = document.getElementById('btn-continuar')
    const confirmar = document.getElementById('btn-confirmar')

    const cadastro1 = document.querySelector('.cadastro1')
    const cadastro2 = document.querySelector('.cadastro2')
    

    voltar.addEventListener('click', () => {
        location.href = "/index.html"
        console.log('chamou')
    })

    mudaParaCadastro2.addEventListener('click', () => {
        cadastro1.style.display = 'none';
        cadastro2.style.display = 'flex';
    })

    confirmar.addEventListener('click', () => {
        location.href = "/index.html"
    })

})