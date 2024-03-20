'use strict';

///////////////////////////////////////////////////
//NAVIGATION//
const btns = document.querySelectorAll('.navigation__link');
const sections = [...document.querySelectorAll('section')];
const checkbox = document.querySelector('.navigation__checkbox');

const getCoords = section => {
  const sectinCoords = section.getBoundingClientRect();
  return sectinCoords.y + window.scrollY;
};

const coords = Object.fromEntries(
  new Map(
    sections.map(section => [section.dataset.section, getCoords(section)])
  )
);

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    if (!e.target.closest('.navigation__link')) return;
    e.preventDefault();
    const thisSection = btn.dataset.section;
    window.scrollTo(0, coords[thisSection]);
    checkbox.checked = false;
  });
});

///////////////////////////////////////////////////
//POPUP//

const popup = document.querySelector('.popup');
popup.addEventListener('click', e => {
  if (e.target.closest('.popup__content')) return;
  e.preventDefault();
  window.location.hash = 'section-tours';
});
