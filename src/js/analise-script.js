document.addEventListener('DOMContentLoaded', () => {
  const ctxChuva = document.getElementById('grafico-chuva')?.getContext('2d');
  const logo = document.getElementById('area-logo');
  const cadastrar = document.getElementById('cadastro');
  const login = document.getElementById('login');
  const botao = document.getElementById("botao-analisar-solo");

  if (cadastrar) {
    cadastrar.addEventListener('click', () => {
      location.href = "/src/paginas/form/formulario.html";
      console.log('Cadastro clicado');
    });
  }

  if (login) {
    login.addEventListener('click', () => {
      location.href = "/src/paginas/form/login.html";
      console.log('Login clicado');
    });
  }

  if (logo) {
    logo.addEventListener('click', () => {
      location.href = "/index.html";
    });
  }

  if (botao) {
    botao.addEventListener("click", buscarPorCep);
  }

  // Inicializa o gráfico vazio global para poder atualizar depois
  if (ctxChuva) {
    window.graficoChuva = new Chart(ctxChuva, {
      type: 'bar',
      data: {
        labels: [],  // vai atualizar dinamicamente
        datasets: [{
          label: 'Precipitação (mm)',
          data: [],
          backgroundColor: '#2f6c2f',
          borderRadius: 10,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              color: '#333',
              font: { size: 14 }
            }
          },
          tooltip: {
            callbacks: {
              label: context => `${context.parsed.y} mm`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Milímetros (mm)',
              color: '#333',
              font: { size: 14 }
            },
            ticks: { color: '#333' }
          },
          x: { ticks: { color: '#333' } }
        }
      }
    });
  }

  async function buscarPorCep() {
    const cepInput = document.getElementById("input-cidade").value.trim();
    const estadoSpan = document.getElementById("estado");
    const cidadeSpan = document.getElementById("cidade");
    const regiaoSpan = document.getElementById("regiao");

    const ehCepValido = /^\d{5}-?\d{3}$/.test(cepInput);
    if (!ehCepValido) {
      alert("Digite um CEP válido no formato 00000-000 ou 00000000.");
      return;
    }

    const cepLimpo = cepInput.replace("-", "");

    try {
      // Consulta API ViaCEP para obter dados do CEP
      const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const dados = await resposta.json();

      if (dados.erro) {
        alert("CEP não encontrado.");
        return;
      }

      const siglaUf = dados.uf;
      const nomeEstado = obterEstadoPorExtenso(siglaUf);
      const regiao = obterRegiaoPorSigla(siglaUf);
      const cidadeNome = dados.localidade;
      const codigoIbge = dados.ibge;

      estadoSpan.textContent = nomeEstado;
      cidadeSpan.textContent = cidadeNome;
      regiaoSpan.textContent = regiao;

      console.log(`Cidade: ${cidadeNome}, Estado: ${nomeEstado}, Código IBGE: ${codigoIbge}`);

      // Consultar a API meteorológica com o código IBGE para dados de chuva
      const chuvaResp = await fetch(`https://meteoserver-h0u8.onrender.com/chuva?codigo_ibge=${codigoIbge}`);
      const chuvaDados = await chuvaResp.json();

      if (chuvaDados.erro) {
        alert("Dados de chuva não encontrados para esta cidade.");
        return;
      }

      console.log("Dados de chuva recebidos:", chuvaDados);

      // Aqui tratamos os dados recebidos para evitar erro com dados indefinidos ou formato inesperado
      const medias = chuvaDados.media_chuva_mensal;

      if (!medias || !Array.isArray(medias) || medias.length === 0) {
        alert("Dados de chuva incompletos ou inválidos.");
        return;
      }

      // Ordena cronologicamente por ano e mês
      medias.sort((a, b) => {
        if (a.ano_mes < b.ano_mes) return -1;
        if (a.ano_mes > b.ano_mes) return 1;
        return 0;
      });

      // Prepara labels e dados para o gráfico
      const labels = medias.map(m => `${m.nome_mes} ${m.ano_mes.slice(0, 4)}`);
      const dadosChuva = medias.map(m => Number(m.media_mm) || 0);

      // Alerta resumido para usuário
      let textoMedias = `Média de chuva mensal em ${chuvaDados.cidade}:\n`;
      medias.forEach(m => {
        textoMedias += `${m.nome_mes} (${m.ano_mes.slice(0, 4)}): ${m.media_mm} mm\n`;
      });
      alert(textoMedias);

      // Atualiza o gráfico
      if (window.graficoChuva) {
        window.graficoChuva.data.labels = labels;
        window.graficoChuva.data.datasets[0].data = dadosChuva;
        window.graficoChuva.update();
      }

    } catch (erro) {
      alert("Erro ao buscar dados. Tente novamente.");
      console.error(erro);
    }
  }

  function obterEstadoPorExtenso(uf) {
    const estados = {
      AC: "Acre",
      AL: "Alagoas",
      AP: "Amapá",
      AM: "Amazonas",
      BA: "Bahia",
      CE: "Ceará",
      DF: "Distrito Federal",
      ES: "Espírito Santo",
      GO: "Goiás",
      MA: "Maranhão",
      MT: "Mato Grosso",
      MS: "Mato Grosso do Sul",
      MG: "Minas Gerais",
      PA: "Pará",
      PB: "Paraíba",
      PR: "Paraná",
      PE: "Pernambuco",
      PI: "Piauí",
      RJ: "Rio de Janeiro",
      RN: "Rio Grande do Norte",
      RS: "Rio Grande do Sul",
      RO: "Rondônia",
      RR: "Roraima",
      SC: "Santa Catarina",
      SP: "São Paulo",
      SE: "Sergipe",
      TO: "Tocantins"
    };

    return estados[uf] || "Estado desconhecido";
  }

  function obterRegiaoPorSigla(uf) {
    const regioes = {
      Norte: ["AC", "AP", "AM", "PA", "RO", "RR", "TO"],
      Nordeste: ["AL", "BA", "CE", "MA", "PB", "PE", "PI", "RN", "SE"],
      CentroOeste: ["DF", "GO", "MT", "MS"],
      Sudeste: ["ES", "MG", "RJ", "SP"],
      Sul: ["PR", "RS", "SC"]
    };

    for (const [regiao, siglas] of Object.entries(regioes)) {
      if (siglas.includes(uf)) return regiao;
    }

    return "Região desconhecida";
  }
});
