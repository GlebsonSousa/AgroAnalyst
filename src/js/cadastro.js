document.addEventListener('DOMContentLoaded', () => {

    const voltar = document.getElementById('voltar')
    const voltarForm = document.getElementById('voltar-form')
    const mudaParaCadastro2 = document.getElementById('btn-continuar')
    const confirmar = document.getElementById('btn-confirmar')

    const cadastro1 = document.querySelector('.cadastro1')
    const cadastro2 = document.querySelector('.cadastro2')
    
    const formulario = document.getElementById("form");

    const campoNome = document.getElementById("txt_nome_usuario")
    const campoEmail = document.getElementById("txt_email_usuario")
    const campoNomeData = document.getElementById("dte_nasc_usuario")
    const campoCPF = document.getElementById("num_cpf_usuario")
    const campoNum = document.getElementById("num_tell_usuario")


    function validaEmail(email){
        email = email.value
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email);
    }


    function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, ''); // remove tudo que não for número
       
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
          return false; // inválido se tiver tamanho errado ou todos os dígitos iguais
        }
       
        let soma = 0;
        for (let i = 0; i < 9; i++) {
          soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
       
        let resto = 11 - (soma % 11);
        let digito1 = (resto >= 10) ? 0 : resto;
       
        if (digito1 !== parseInt(cpf.charAt(9))) return false;
       
        soma = 0;
        for (let i = 0; i < 10; i++) {
          soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
       
        resto = 11 - (soma % 11);
        let digito2 = (resto >= 10) ? 0 : resto;
       
        return digito2 === parseInt(cpf.charAt(10));
      }

      function validaDataNascimento(dataString) {
        if (!dataString) return false;
       
        const dataNasc = new Date(dataString);
        const hoje = new Date();
       
        if (isNaN(dataNasc)) return false; // Verifica se a data é inválida
       
        const idade = hoje.getFullYear() - dataNasc.getFullYear();
        const mes = hoje.getMonth() - dataNasc.getMonth();
        const dia = hoje.getDate() - dataNasc.getDate();
       
        const idadeReal = mes < 0 || (mes === 0 && dia < 0) ? idade - 1 : idade;
       
        if (dataNasc > hoje) return false;      // Data futura
        if (idadeReal < 18) return false;       // Menor de idade
        if (idadeReal > 120) return false;      // Idade irreal
       
        return true; // ✅ Data válida
      }


    voltar.addEventListener('click', () => {
        location.href = "/index.html"

    })

    voltarForm.addEventListener('click', () => {
        cadastro1.style.display = 'flex';
        cadastro2.style.display = 'none';
        formulario.style.height =  "80vh";
        console.log('chamou')
    })

    mudaParaCadastro2.addEventListener('click', () => {

       // .value -> Pega o valor da div
       // .trim() -> Tira os espaços vazios
        let valcpf = validarCPF(campoCPF.value.trim())
        console.log(valcpf)
        if (campoNome.value.length > 4 && validaEmail(campoEmail) === true && campoNomeData.value.trim() != "" && campoCPF.value.trim() === true){
            if (campoNome.value.trim() != ""){
                cadastro1.style.display = 'none';
                cadastro2.style.display = 'flex';
                formulario.style.height =  "65vh";
            }
        }else{
            alert("O nome precisa ter mais que 4 caracteres")
        }
    })

    confirmar.addEventListener('click', () => {
        location.href = "/index.html"
    })

    
    //------------------------------------------------


    

})