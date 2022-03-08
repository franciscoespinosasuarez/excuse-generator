//excusas
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished']


//CREAR GENERADOR DE EXCUSAS

let excuse = "";

let first = Math.ceil(Math.random()*4)-1;
let second = Math.ceil(Math.random()*4)-1;
let third = Math.ceil(Math.random()*3)-1;
let fourth = Math.ceil(Math.random()*3)-1;

console.log(first)
console.log(second)
console.log(third)
console.log(fourth)


excuse = `${who[first]} ${action[second]} ${what[third]} ${when[fourth]}`


//HTML

const divExcusa = document.querySelector('#excusa');

const excusaHTML = document.createElement('p');
excusaHTML.textContent = excuse;
console.log(excusaHTML)
divExcusa.appendChild(excusaHTML)


console.log(divExcusa)

