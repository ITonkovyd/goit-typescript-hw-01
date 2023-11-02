import { concatenation } from "./concat"

const button = document.querySelector('button')
const input = document.querySelector('input')

if (button && input) {
  button.addEventListener('click', () => {
    if (input.value.trim().length === 0) {
     return alert('Fill the input field')
    }
     concatenation("Hello, ", input.value)
    
  })
}