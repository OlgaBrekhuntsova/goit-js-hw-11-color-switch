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
// const randomIntegerFromInterval = function (min, max) {
  // return Math.floor(Math.random() * (max - min + 1) + min);
// }; //генерирование случайных целых чисел, включая мин и макс
let prevI = -1;
let randomI = -1;
const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  bodyTag: document.querySelector('body'),
};

const colorSwitcher = {
  intervalId: null,
  isActive: false,
  switchColors() {
    if (this.isActive) { return; };
    this.isActive = true;
 this.intervalId = setInterval(cbSwitchColorsInterval, 1000);  
   },
  
stopSwitchingColors() {
  this.isActive = false;
  clearInterval(this.intervalId);
  this.intervalId = null;
},
  };

  //случайный генератор цветов из массива
const cbSwitchColorsInterval = () => {
  do {
  randomI = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(colors[randomI]);}  //генерирование случайных целых чисел - индексов элемнтов массива цветов
  while (randomI === prevI);//убираем одинаковый цвет темы >1 раза подряд 
  const i = randomI;
  refs.bodyTag.style.backgroundColor = colors[i];
  prevI = i;
};
refs.startBtn.addEventListener('click', colorSwitcher.switchColors.bind(colorSwitcher));
refs.stopBtn.addEventListener('click', colorSwitcher.stopSwitchingColors.bind(colorSwitcher));

