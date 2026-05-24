const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mars', 'Avril', 'Mai'],
    datasets: [{
      label: 'Visites',
      data: [12, 19, 8, 15, 22],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true
  }
});