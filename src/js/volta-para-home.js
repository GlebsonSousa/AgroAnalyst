document.addEventListener('DOMContentLoaded', () => {
    //Define variaveis para objetos do html

    const logo = document.getElementById('area-logo')
    const logar = document.getElementById('login')
 

    logo.addEventListener('click', () => {
        console.log('Clique captado!')
        location.href = "/index.html"
    })

    logar.addEventListener('click', () => {
        location.href = "/form/formulario.html"
        console.log('chamou')
    })

})