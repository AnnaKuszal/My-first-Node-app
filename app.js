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

const people = [];
 
for(i=0; i<5; i++) {
     
  const pickedGender = randChoice(genders);

  let pickedName= '';
  if(pickedGender === "K") {
    pickedName = randChoice(femaleNames);
  } else {
    pickedName = randChoice(maleNames);
  }
 
  const pickedLastName = randChoice(lastNames);
  const pickedAge = Math.floor(Math.random() * 60 + 18);
 
  let pickedNumber = '';
  for(k=0; k<3; k++) {
    const randomPart = Math.floor(Math.random() * 499 + 500);
    pickedNumber = pickedNumber + randomPart;
  }
 
  const pickedEmail = `${pickedName.toLowerCase()}.${pickedLastName.toLowerCase()}@gmail.com`;

  const person = {
    gender: pickedGender,
    firstName: pickedName,
    lastName: pickedLastName,
    age: pickedAge,
    phone: pickedNumber,
    mail: pickedEmail
  };

  people.push(person);
}
 
const peopleJson = JSON.stringify(people, null, '  ');
console.log('peopleJson: ', peopleJson);
 
fs.writeFile('people.json', peopleJson, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

