document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown-list');

  if (toggle && dropdown) {
    toggle.addEventListener('mouseenter', () => {
      dropdown.style.display = 'block';
    });
    toggle.addEventListener('mouseleave', () => {
      dropdown.style.display = 'none';
    });
    dropdown.addEventListener('mouseenter', () => {
      dropdown.style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
      dropdown.style.display = 'none';
    });
  }

  document.querySelectorAll('.dropdown-list a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = '#ee7a52';
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = '#000';
    });
  });
});

function openCallbackPopup() {
  document.getElementById('callback-popup').style.display = 'flex';
}

function closeCallbackPopup() {
  document.getElementById('callback-popup').style.display = 'none';
}
