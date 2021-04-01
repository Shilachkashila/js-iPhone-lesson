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

//

  const accordion = () => {
    const characteristicsListElem = document.querySelector('.characteristics__list');
    const characteristicsItemElem = document.querySelectorAll('.characteristics__item');

    const open = (button, dropDown) => {
      dropDown.style.height = `${dropDown.scrollHeight}px`;
      button.classList.add('active');
      dropDown.classList.add('active');
    };

    const close = (button, dropDown) => {
      button.classList.remove('active');
      dropDown.classList.remove('active');
      dropDown.style.height = '';
    };

//делегирование: навешиваем событие клика на весь элемент ul, target указывает конкретные
//зоны елемента на которые можно кликать, if выбирает при клике на какие именно зоны будет срабатывать
//код написаный мной для события click

// метод closest Метод Element.closest() возвращает ближайший родительский элемент
// (или сам элемент), который соответствует заданному CSS-селектору или null
    characteristicsListElem.addEventListener('click', (event) => {
      const target = event.target;

      if (target.classList.contains('characteristics__title')) {
        const parent = target.closest('.characteristics__item');
        console.log(parent);
      };
    })
  };

  tabs();
  accordion();
});
