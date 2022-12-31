const ctx = document.getElementById('myChart')

Chart.defaults.font.size = 18
Chart.defaults.font.family = 'Poppins'
Chart.defaults.color = '#100F4B'

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      36, 56, 114, 121, 165, 207, 223, 307, 333, 376, 390, 408, 422, 424, 436,
      463, 515, 529, 616, 639, 664, 681, 692, 703, 729, 742, 789, 866, 878, 
      901, 920, 954, 996,
    ],
    datasets: [
      {
        label: 'Fri, Apr10, 7:51 PM',
        data: [
          0, 225, 90, 160, 70, 85, 20, 160, 35, 90, 200, 40, 80, 0, 70, 130, 
          75, 190, 30, 195, 0, 80, 20, 140, 100, 180, 30, 80, 20, 150, 0, 50, 0
        ],
        borderWidth: 2,
        borderColor: '#7a84fe',
        radius: 1,
        hoverRadius: 8,
        hoverBorderWidth: 2,
        pointHoverBorderColor: '#870FfB',
      },
    ],
  },
  options: {
    pointStyle: true,
    plugins: {
      tooltip: {
        titleFont: {
          size: 14,
          weight: 500,
          family: 'Nunito',
        },
        bodyFont: {
          size: 20,
          weight: 500,
          family: 'Montserrat',
        },
        backgroundColor: '#100F4B',
        displayColors: false,
        yAlign: 'bottom',
        caretSize: 0,
        caretPadding: 12,
        padding: 15,
        margin: '200px',
        callbacks: {
          title: function (context) {
            return 'Fri, Apr 10, 7:51 PM'
          },
          label: function (context) {
            let label = context.dataset.data[context.dataIndex]
            return `${label}%`
          },
          labelTextColor: function (context) {
            return '#fff'
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 225,
        ticks: {
          count: 4,
          callback: function (value) {
            return `${value}%`
          },
        },
      },
      x: {
        type: 'linear',
        beginAtZero: 0,
        min: 0,
        max: 996,
        ticks: {
          count: 7,
        },
      },
    },
  },
})
