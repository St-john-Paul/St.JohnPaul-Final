const $thumbnails = document.querySelectorAll('.thumbnail');
const $preview = document.getElementById('preview');

$thumbnails.forEach(($item) => {
  $item.addEventListener(
    'click',
    (event) => {
      $thumbnails.forEach((i) => {
        i.classList.remove('active');
      });
      $item.classList.add('active');
      $preview.src = $item.src;
    },
  );
});

