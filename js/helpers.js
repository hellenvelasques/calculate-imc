import { Modal } from './modal.js';

export const calculateIMC = (weight, height) => {
  return (weight / ((height / 100) ** 2 )).toFixed(2);
}

export const notNumber = (value) => {
  return isNaN(value) || value == '';
}

export const displayResultMessage = (resultCalculateIMC, classification) => {

  if (resultCalculateIMC < 18.5) {
    classification = 'Abaixo do peso';
  } else if (resultCalculateIMC >= 18.6 && resultCalculateIMC <= 24.99) {
    classification = 'Peso ideal';
  } else if (resultCalculateIMC >= 25 && resultCalculateIMC <= 29.99) {
    classification = 'Sobrepeso';
  } else if (resultCalculateIMC >= 30 && resultCalculateIMC <= 34.99) {
    classification = 'Obesidade grau 1';
  } else if (resultCalculateIMC >= 35 && resultCalculateIMC <= 39.99) {
    classification = 'Obesidade grau 2 (severa)';
  } else if (resultCalculateIMC >= 40) {
    classification = 'Obesidade grau 3 (mórbida)';
  }

  const message = `Seu IMC é de ${resultCalculateIMC}`
  const classificationMessage  = `Classificação: ${classification}`
  
  Modal.message.innerText = message;
  Modal.classification.innerText = classificationMessage;
  Modal.open();
}