document.addEventListener('DOMContentLoaded', () => {
    //Define variaveis para objetos do html

    const logo = document.getElementById('area-logo')

    logo.addEventListener('click', () => {
        console.log('Clique captado!')
        location.href = "/index.html"
    })

})