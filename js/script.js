const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();// Prevent form from submitting
    
    const inputAnswer = document.querySelector('#answer');
    // Get user answer, remove whitespace, and convert to lowercase if it isn't
    const answer = inputAnswer.value.trim().toLowerCase(); 
    
    // Check answer and display alert
    if(answer !== 'nothing') {
        alert('So close... but not quite.')
    } else {
        alert('Correct! Quite odd that it has no significance right?')
    }
    inputAnswer.value = ''; // Clear the input value
}

// Function to display popup when clicked
function displayInfo() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block'; 
}

// Function to hide popup when clicked
function hidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
