// 📊 Gráfico de Precipitação Mensal com Chart.js
document.addEventListener('DOMContentLoaded', () => {
  const ctxChuva = document.getElementById('grafico-chuva')?.getContext('2d');
  const logo = document.getElementById('area-logo')

 
  
  if (!ctxChuva) return;

  const graficoChuva = new Chart(ctxChuva, {
    type: 'bar',
    data: {
      labels: [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
      ],
      datasets: [{
        label: 'Precipitação (mm)',
        data: [120, 110, 95, 85, 70, 60, 55, 65, 80, 100, 115, 125],
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
            font: {
              size: 14
            }
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
          ticks: {
            color: '#333'
          }
        },
        x: {
          ticks: {
            color: '#333'
          }
        }
      }
    }
  });

  logo.addEventListener('click', ()=> {
    location.href = "/index.html"
  })



});
