const os = require('os');
const fs = require('fs');

console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());

const genders = ["K", "M"]; 
const maleNames = ["Adrian", "Bartek", "Tomasz", "Marek", "Grzegorz", "Rafal", "Piotr", "Mariusz", "Maciej", "Jerzy"]; 
const femaleNames = ["Ada", "Rita", "Agnieszka", "Lidia", "Paulina", "Marta", "Nina", "Róża", "Jolanta", "Jagoda"];
const lastNames = ["Nowak", "Kowal", "Wydro", "Stepien", "Surowiec", "Sondej", "Gruza", "Moryto", "Smolik", "Ortyl"];

const randChoice = function(arr) {
  const choiceRange = arr.length;
 
  let j = Math.floor(Math.random() * choiceRange + 0);
  const randomElement = arr[j];
  return randomElement;
};
 
