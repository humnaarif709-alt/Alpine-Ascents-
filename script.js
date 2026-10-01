document.addEventListener('DOMContentLoaded', function() {

  // 1. FILTER FUNCTION
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 2. POPUP FUNCTION
  const popup = document.getElementById('detailPopup');
  const viewBtns = document.querySelectorAll('.view-details');
  const closeBtn = document.querySelector('.close');

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Get data from button
      document.getElementById('popup-img').src = btn.getAttribute('data-img');
      document.getElementById('popup-title').textContent = btn.getAttribute('data-title');
      document.getElementById('popup-location').textContent = btn.getAttribute('data-location');
      document.getElementById('popup-height').textContent = btn.getAttribute('data-height');
      document.getElementById('popup-difficulty').textContent = btn.getAttribute('data-difficulty');
      document.getElementById('popup-season').textContent = btn.getAttribute('data-season');
      document.getElementById('popup-equipment').textContent = btn.getAttribute('data-equipment');
      document.getElementById('popup-safety').textContent = btn.getAttribute('data-safety');
      document.getElementById('popup-records').textContent = btn.getAttribute('data-records');

      // Show popup
      popup.style.display = 'block';
    });
  });

  // Close popup on X click
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Close popup on outside click
  window.addEventListener('click', (e) => {
    if (e.target == popup) {
      popup.style.display = 'none';
    }
  });

});


    
