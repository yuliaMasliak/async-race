export let currentPage = 1;
export let countWinners = 0;
export let currentWinnerPage = 1;
export let count = 0;
export const winnerPerPage = 10;
export const carsPerPage = 7;
export const hundredCars = 99;
export const colorCount = 6;
export const carBrands = [
  'Apollo',
  'Arash',
  'ARO',
  'Arrinera',
  'Artega',
  'Chrysler',
  'Dacia',
  'Daewoo',
  'DAF',
  'Daihatsu',
];

export const carModels = [
  'Durango',
  'Ram',
  'Challenger',
  'Charger',
  'Grand Caravan',
  'X7',
  'X5',
  'X3',
  'X6 M',
  'X6',
];

export let winnerArr = [];
export let stoppedCars = [];

export const base = 'https://async-race-backend-xucy.onrender.com';

export const basePath = {
  garage: '/garage',
  engine: '/engine',
  winners: '/winners',
};

export const createQuery = (queryParameters = []) =>
  queryParameters.length
    ? `?${queryParameters.map((item) => `${item.key}=${item.value}`).join('&')}`
    : '';

export function modifyCurrentPage(value) {
  currentPage = value;
}
export function modifyCountWinners(value) {
  countWinners = value;
}
export function modifyCurrentWinnerPage(value) {
  currentWinnerPage = value;
}
export function modifyCount(value) {
  count = value;
}
