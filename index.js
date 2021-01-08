const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const min = 0;
const max = Number(colors.length) - 1;
const randomIntegerFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; //генерирование случайных целых чисел, включая мин и макс
let prevI = -1;
let randomI = -1;
const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  bodyTag: document.querySelector('body'),
};
  
const switchColors = (event) => {
  refs.startBtn.removeEventListener('click', switchColors); //удаление слушателя со старт
  const id = setInterval(cbSwitchColorsInterval, 2000);  
  console.log(id);
  const stopSwitchingColors = () => {
    clearInterval(id);//удаление таймера
    refs.startBtn.addEventListener('click', switchColors); //добавление слушателя на старт
  }; 
  refs.stopBtn.addEventListener('click', stopSwitchingColors);//добавление слушателя на стоп

};
const cbSwitchColorsInterval = () => {
  do {
  randomI = randomIntegerFromInterval(min, max);
  console.log(colors[randomI]);}  //генерирование случайных целых чисел - индексов элемнтов массива цветов
  while (randomI === prevI);//убираем одинаковый цвет темы >1 раза подряд 
  const i = randomI;
  refs.bodyTag.style.backgroundColor = colors[i];
  prevI = i;
};
refs.startBtn.addEventListener('click', switchColors);


