document.addEventListener('DOMContentLoaded', () => {
    //Define variaveis para objetos do html

    const btn_analisa = document.getElementById('btn-analisar')

    btn_analisa.addEventListener('click', () => {
        console.log('Teste on!')
        location.href = "/src/paginas/analise-solo.html"
    })

})