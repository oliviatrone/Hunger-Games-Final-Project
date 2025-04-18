// JavaScript code for the District Selector game

// Function to handle form submission and display district
document.getElementById('districtForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting and refreshing the page
  
    // Get the user input (name)
    const name = document.getElementById('nameInput').value.trim();
  
    if (name === '') {
      alert('Please enter your name.');
      return;  // Exit if no name is entered
    }
  
    // Generate a random district (1-12)
    const districtNumber = Math.floor(Math.random() * 12) + 1;
  
    // Display the district output
    const outputDiv = document.getElementById('districtOutput');
    outputDiv.innerHTML = `Hello, ${name}! You are from District ${districtNumber}.`;
  
    // Clear the input field after submission
    document.getElementById('nameInput').value = '';
  });
  