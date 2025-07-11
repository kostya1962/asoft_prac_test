let name = '';
let description = '';
let frequency = 0;
let count = 0;
let sum = 0;

const nameInput = document.querySelector('#habit-name');
const descriptionInput = document.querySelector('#description');
const frequencySelect = document.querySelector('#frequency');
const countInput = document.querySelector('#count');
const sumInput = document.querySelector('#sum');
console.log(nameInput, descriptionInput, frequencySelect, countInput, sumInput);

function nameInputHendler(ev){
    name = ev.target.value;
    console.log(name);
}

nameInput.addEventListener('input', nameInputHendler);

function setSum(){
    sum = frequency * count;
    sumInput.textContent = sum.toString();
}

setSum();
function frequencyChange(ev){
    if(ev.target.value == undefined){
        frequency = 0;
    }
    else {
        frequency = parseInt(ev.target.value);
    }
    setSum();
    console.log(frequency);
}

frequencySelect.addEventListener('change', frequencyChange);

setSum();
function countInputHandler(ev){
    if(ev.target.value == undefined){
        count = 0;
    }
    else {
        count = parseInt(ev.target.value);
    }
    setSum();
    console.log(count);
}

countInput.addEventListener('input', countInputHandler);


const formElement = document.querySelector('form');
formElement.addEventListener('submit', (ev) => {
    ev.preventDefault();
    console.log(name, description, frequency, count, sum);
});