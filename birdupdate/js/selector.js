  document.addEventListener('DOMContentLoaded', function() {

    const franceBtn = document.querySelector('.france');
    const germanyBtn = document.querySelector('.germany');
    const englandBtn = document.querySelector('.england');
    const itemsFra = document.querySelectorAll('.reproducts__item');
    const itemsGer = document.querySelectorAll('.reproducts__item__two');
    const itemsEng = document.querySelectorAll('.reproducts__item__three');

    function hideAllFra() {
      itemsFra.forEach(item => {
        item.style.display = 'flex';
      });

      itemsGer.forEach(item => {
        item.style.display = 'none';
      });

      itemsEng.forEach(item => {
        item.style.display = 'none';
      });
    }

    function hideAllGer() {
      itemsGer.forEach(item => {
        item.style.display = 'flex';
      });

      itemsFra.forEach(item => {
        item.style.display = 'none';
      });

      itemsEng.forEach(item => {
        item.style.display = 'none';
      });
    }

    function hideAllEng() {
      itemsEng.forEach(item => {
        item.style.display = 'flex';
      });

      itemsFra.forEach(item => {
        item.style.display = 'none';
      });

      itemsGer.forEach(item => {
        item.style.display = 'none';
      });
    }

    franceBtn.addEventListener('click', hideAllFra);
    germanyBtn.addEventListener('click', hideAllGer);
    englandBtn.addEventListener('click', hideAllEng);
    
  });