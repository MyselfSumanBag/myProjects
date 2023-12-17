document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');
  
    // Counter variable
    let counterValue = 0;
  
    // Function to update the counter display
    function updateCounter() {
      counterElement.textContent = counterValue;
    }
  
    // Event listener for increment button
    incrementBtn.addEventListener('click', function () {
      counterValue += 1;
      updateCounter();
    });
  
    // Event listener for decrement button
    decrementBtn.addEventListener('click', function () {
      counterValue -= 1;
      updateCounter();
    });
  
    // Event listener for reset button
    resetBtn.addEventListener('click', function () {
      counterValue = 0;
      updateCounter();
    });
  
    // Initial update
    updateCounter();
  });
  