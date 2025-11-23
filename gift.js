// gift.js: animación de abrir regalo

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.gift-box').forEach(function (box) {
    box.addEventListener('click', function () {
      if (box.classList.contains('opened')) return;
      box.classList.add('opened');
    });
  });
});
