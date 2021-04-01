// работа с табами когда елемент один (h2) а его значение меняют подставляя варианты из массива данных

document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const tabs = () => {
    const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');

    const cardDetailsTitleElem = document.querySelector('.card-details__title');
    const cardImageItemElem = document.querySelector('.card__image_item');

    // массив данных
    const data = [
      {
        name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
        img: 'img/iPhone-graphite.png',
      },
      {
        name: 'Смартфон Apple iPhone 12 Pro 128GB Silver',
        img: 'img/iPhone-silver.png',
      },
      {
        name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
        img: 'img/iPhone-blue.png',
      },
    ];

    // убрать класс active с элементов
    const deactiv = () => {
      cardDetailChangeElems.forEach(btn => btn.classList.remove('active'))
    };

    // перебрить циклом элементы меняя класс active и добавляя данные с массива
    cardDetailChangeElems.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        if (!btn.classList.contains('active')) {
          deactiv();
          btn.classList.add('active');

          cardDetailsTitleElem.textContent = data[i].name;
          cardImageItemElem.src = data[i].img;
          cardImageItemElem.alt = data[i].name;
        }
      });
    });
  };

//toggle jQuery метод .toggle() позволяет отобразить или скрыть выбранные элементы.
// Если элемент изначально отображается, то он будет скрыт, если элемент скрыт,
//то он будет отображен.

//Значение CSS свойства display элемента сохраняются и восстанавливаются при необходимости.
// Например, если элемент имеет значение этого свойства inline, то при отображении элемента,
//после того как он был скрыт, значение свойства не изменится и будет по прежнему inline.

//Когда метод .toggle() используется без параметров, то элемент скрывается, или отображается
//без анимации. Когда метод используется с параметрами, то происходит анимация свойств
// width (ширина), height (высота) и opacitycss3 (прозрачность) у выбранных элементов.
// В момент достижения этих свойств нулевых значение (анимация исчезновения), CSS свойство display
//устанавливается в none. Метод .slideToggle() в отличии от .toggle() производит анимацию только высоты элемента.

  const accordion = () => {
    const characteristicsTitle = document.querySelectorAll('.characteristics__title');
    const characteristicsDescription = document.querySelectorAll('.characteristics__description');

    characteristicsTitle.forEach((elem, i) => {
      elem.addEventListener('click', () => {
        elem.classList.toggle('active');
        characteristicsDescription[i].classList.toggle('active');
      })
    })
  };

  tabs();
  accordion();
});
