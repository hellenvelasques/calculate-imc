import { calculateIMC, notNumber, displayResultMessage } from './helpers.js';
import { AlertError } from './alertError.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (event) => {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;
  
  const weightOrheightIsNotNumber = notNumber(weight) || notNumber(height);
  
  if (weightOrheightIsNotNumber) {
    AlertError.open();
    return;
  }
  
  AlertError.close();
  
  const resultCalculateIMC = calculateIMC(weight, height);
  displayResultMessage(resultCalculateIMC);
}

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();