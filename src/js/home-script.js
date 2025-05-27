document.addEventListener('DOMContentLoaded', () => {
    //Define variaveis para objetos do html

    const btn_analisa = document.getElementById('btn-analisar')
    const logo = document.getElementById('logo')
    const cadastro = document.getElementById('cadastro')


    btn_analisa.addEventListener('click', () => {
        location.href = "/src/paginas/analise-solo.html"
    })

    logo.addEventListener('click', () => {
        console.log('Clique captado!')
        location.href = "index.html"
    })

})