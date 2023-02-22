const dashboard = {
  changeRadioButtonColor(selectedRadio, allRadios) {
    allRadios.forEach((radio) => {
      if (selectedRadio.value !== radio.value) {
        radio.classList.remove(radio.value)
      } else {
        radio.classList.add(radio.value)
      }
    })
  },
  resetForm() {
    document.getElementById('task-form').reset()
  },

  
}

export default dashboard



