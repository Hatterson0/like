let heart = document.querySelector('.buttonnoheart');
let likesNumber = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function () {
  // Добавьте код сюда
  likesNumber.textContent = counter;
  heart.classList.toggle('buttonhaveheart');
  heart.classList.toggle('buttonnoheart');
  counter++;
};
