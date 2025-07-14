const habit = {
    name: '',
    description: '',
    frequency: 0,
    count: 0,
    sum: 0,
};

const nameMeta = {
    selector: document.querySelector('#habit-name'),
    hendler: (ev) => {
        habit.name = ev.target.value;
        console.log(habit.name);
    }
} 

const descMeta = {
    selector: document.querySelector('#description'),
    hendler: (ev) => {
        habit.description = ev.target.value;
        console.log(habit.description);
    }
};

const freqMeta = {
    selector: document.querySelector('#frequency'),
    hendler: (ev) => {
        if(ev.target.value == undefined){
            habit.frequency = 0;
        }
        else {
            habit.frequency = parseInt(ev.target.value);
        }
        setSum();
        console.log(count);
    }
};

const countMeta = {
    selector: document.querySelector('#count'),
    hendler: (ev) => {
        if(ev.target.value == undefined){
            habit.count = 0;
        }
        else {
            habit.count = parseInt(ev.target.value);
        }
        setSum();
        console.log(typeof habit.count);
    }
};

const sumMeta = {
    selector: document.querySelector('#sum'),
    hendler: (ev) => {
        habit.sum = ev.target.value;
        console.log(habit.sum);
    }
};

const metaData = [nameMeta, descMeta, freqMeta, countMeta];

for (const {selector, hendler: handler} of metaData) {
    if (selector.tagName.toLowerCase() == 'select'){
        selector.addEventListener('change', handler);
    }
    else{
        selector.addEventListener('input', handler);
    }
    console.log(handler)
}
sumInput = document.querySelector('#sum');

//nameInput.addEventListener('input', nameInputHendler);

function setSum(){
    habit.sum = habit.frequency * habit.count;
    window.sumInput.textContent = habit.sum.toString();
}

setSum();
function frequencyChange(ev){
    if(ev.target.value == undefined){
        habit.frequency = 0;
    }
    else {
        habit.frequency = parseInt(ev.target.value);
    }
    setSum();
    console.log(habit.frequency);
}

//frequencySelect.addEventListener('change', frequencyChange);

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

//countInput.addEventListener('input', countInputHandler);


const formElement = document.querySelector('form');
formElement.addEventListener('submit', (ev) => {
    ev.preventDefault();
    console.log(habit);
});