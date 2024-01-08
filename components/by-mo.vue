<script lang="ts" setup>
const timesPressed = ref(0)
const increment = () => timesPressed.value++

onMounted(() => {
  document.addEventListener('keydown', {
    // make the code listen to the keydown event that type 7780 in order
    handleEvent: (event: KeyboardEvent) => {
      if (timesPressed.value === 0 && event.code === 'Digit7') {
        increment()
      }

      if (timesPressed.value === 1 && event.code === 'Digit7') {
        increment()
      }

      if (timesPressed.value === 2 && event.code === 'Digit8') {
        increment()
      }

      if (timesPressed.value === 3 && event.code === 'Digit0') {
        increment()
      }

      if (timesPressed.value === 4) {
        alert('This app was developed by Mohammed Wisam <3 aka @redcodemohammed')
        timesPressed.value = 0
      }

      if (event.code !== 'Digit7' && event.code !== 'Digit8' && event.code !== 'Digit0') {
        timesPressed.value = 0
      }
    }
  })
})
</script>
