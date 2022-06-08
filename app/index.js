const textarea = document.querySelector('.textarea-field')
const counter = document.querySelector('.current')
const maxlength = 400
const runCounter = textarea.addEventListener('input', onInput)

document.addEventListener('DOMContentLoaded', runCounter)

function onInput(event) {
  event.target.value = event.target.value.substr(0, maxlength)
  const length = event.target.value.length
  counter.textContent = length
}
