fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach((bar, index) => {
      bar.style.height = data[index].amount * 1.3 + '%';
      bar.setAttribute('data-value', '$' + data[index].amount);

      bar.addEventListener('click', () => {
        chartBars.forEach((bar) => {
          bar.classList.remove('active');
        });

        bar.classList.add('active');
      });
    });
  })
  .catch((error) => console.error('Error fetching data: ', error));
