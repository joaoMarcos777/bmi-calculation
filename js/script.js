import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateBMI, notANumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = handleSubmit;
inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

function handleSubmit(event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  const result = calculateBMI(weight, height);
  displayResultMessage(result);
}

function displayResultMessage(result) {
  const message = `Your BMI is ${result}`;

  Modal.message.innerHTML = message;
  Modal.open();
}
