// JavaScript code for the District Selector game

document.getElementById('districtForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
  
    // Get the user input (name)
    const name = document.getElementById('nameInput').value.trim();
  
    if (name === '') {
      alert('Please enter your name.');
      return;  // Exit if no name entered
    }
  
    // Generate random district (1-12)
    const districtNumber = Math.floor(Math.random() * 12) + 1;
  
    // Display result
    const outputDiv = document.getElementById('districtOutput');
    outputDiv.innerHTML = `Hello, ${name}! You are from District ${districtNumber}.`;
  
    // Clear input field after submission
    document.getElementById('nameInput').value = '';
});