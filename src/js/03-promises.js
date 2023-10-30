
import { Notify } from "notiflix";


const inputFirstDelay = document.querySelector('[name="delay"]');
const inputStepDelay = document.querySelector('[name="step"]');
const inputAmount = document.querySelector('[name="amount"]');
const btnSubmit = document.querySelector('[type="submit"]');





function formData(e) {
  e.preventDefault();
let dataObj = {
firstDelay: Number(inputFirstDelay.value),
stepDelay: Number(inputStepDelay.value),
amount: Number(inputAmount.value)
}
const {firstDelay, stepDelay, amount} = dataObj;

for (let index = 0; index < amount; index++) {
globalDelay = firstDelay + stepDelay * index;

createPromise(1 + index, globalDelay)
.then(({position,delay})=>{
Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({position,delay})=>{
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
})
}
}

btnSubmit.addEventListener('click', formData)


function createPromise(position, delay) {

  return new Promise((res,rej)=>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=>{
      if (shouldResolve) {
      res({position,delay});
      } else {
      rej({position,delay});
      }
    },delay)
  })
}