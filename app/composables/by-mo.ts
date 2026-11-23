export const useByMo = () => {
  const timesPressed = ref(0)

  onMounted(() => {
    document.addEventListener('keydown', {
      // listen for the keydown sequence 7-7-8-0 in order
      handleEvent: (event: KeyboardEvent) => {
        if (timesPressed.value === 0 && event.code === 'Digit7') {
          timesPressed.value++
        } else if (timesPressed.value === 1 && event.code === 'Digit7') {
          timesPressed.value++
        } else if (timesPressed.value === 2 && event.code === 'Digit8') {
          timesPressed.value++
        } else if (timesPressed.value === 3 && event.code === 'Digit0') {
          timesPressed.value++
        } else if (event.code !== 'Digit7' && event.code !== 'Digit8' && event.code !== 'Digit0') {
          timesPressed.value = 0
        }

        if (timesPressed.value === 4) {
          alert('This app was developed by Mohammed Wisam <3 aka @redcodemohammed')
          timesPressed.value = 0
        }
      }
    })
  })
}
