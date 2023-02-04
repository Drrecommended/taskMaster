export function resetForm() {
  document.getElementById('task-form').reset()
}

export function changeRadioButtonColors(selectedRadio, allRadios) {
  allRadios.forEach((radio) => {
    if (selectedRadio.value !== radio.value) {
      radio.classList.remove(radio.value)
    } else {
      radio.classList.add(radio.value)
    }
  })
}
