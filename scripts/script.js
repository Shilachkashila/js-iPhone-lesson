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
    })
  };

  const accordion () => {
    const characteristicsTitle = document.querySelectorAll('.characteristics__title');
    const characteristicsDescription = document.querySelectorAll('.characteristics__description');

    characteristicsTitle.forEach((elem, i) => {
      elem.addEventListener('click', () => {
        elem.classList.toggle('active');
      })
    });

  }
  tabs();
});
