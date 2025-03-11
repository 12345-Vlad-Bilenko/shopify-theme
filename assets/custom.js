// Додаємо слухач подій для усіх елементів з класом card__content
document.querySelectorAll('.card__content').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
      // Додаємо клас до прямокутника при наведенні
      document.getElementById('fixed-rectangle').classList.add('hovered');
    });
  
    item.addEventListener('mouseleave', function() {
      // Видаляємо клас при відведенні курсора
      document.getElementById('fixed-rectangle').classList.remove('hovered');
    });
  });