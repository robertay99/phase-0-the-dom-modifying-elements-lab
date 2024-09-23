// Remove the <main> element
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the ID of the <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the <h1> element to your name
newHeader.textContent = 'Your-Name is the champion'; // Replace 'Your-Name' with your actual name

// Append the new <h1> element to the body
document.body.append(newHeader);
