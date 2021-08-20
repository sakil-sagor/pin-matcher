
// generate pin 

let input = document.querySelector('#pin-show');
let generatePinNumber = document.querySelector('#pin-show')
function pinNumber() {
    let pin = Math.round(Math.random() * 10000);
    let checkPin = pin + '';
    if (checkPin.length == 4) {
        return pin;
    } else {

        return pinNumber();
    }

}
function pin() {
    let generatePin = pinNumber();
    generatePinNumber.value = generatePin;
}


// input pin calculator 

let inputPin = document.querySelector('#input-pin');

let clickPin = document.querySelectorAll('.pin-btn');


for (let i of clickPin) {
    i.addEventListener('click', function (event) {
        let inputValue = inputPin.value;
        let clickedPin = event.target.innerText;
        if (clickedPin == "C") {
            inputPin.value = '';
        } else if (clickedPin == "<") {
            inputPin.value = inputValue.substring(0, inputValue.length - 1);

        } else {
            inputPin.value = inputValue + clickedPin;
        }

    })
}


// pin matching script 
document.querySelector('#submit').addEventListener('click', function () {
    if (generatePinNumber.value == '' || inputPin.value == '') {
        console
    } else if (generatePinNumber.value == inputPin.value) {
        document.querySelector('#pin-match').style.visibility = "visible ";
        document.querySelector('#pin-not-match').style.visibility = "hidden ";
    } else {
        document.querySelector('#pin-not-match').style.visibility = "visible ";
        document.querySelector('#pin-match').style.visibility = "hidden ";
    }
})
