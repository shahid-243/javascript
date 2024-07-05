// Get references to the form and the list
const form = document.getElementById('add-item-form');
form.style.textAlign = 'center';
const input = document.getElementById('new-item');
input.style.height = '40px';
input.style.textAlign = 'center';
input.style.fontSize = '18px'
input.style.width = '300px'; 
input.style.borderRadius = '10px';
input.style.paddingLeft ='10px'
const button = document.getElementById('button');
button.style.height = '45px';
button.style.borderRadius = '10px'
button.style.margin = '10px'
button.style.backgroundColor = 'skyblue'
button.style.fontWeight='bold'
const list = document.getElementById('to-do-list');
list.style.fontSize ='40px'
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();


  const newItem = document.getElementById('new-item');

  // Create a new list item and add it to the list
  const li = document.createElement('li');
  li.innerText = newItem.value;
  list.append(li);
  // Add an event listener to the new list item
  li.addEventListener('click', () => {
    // Remove the list item from the list
    list.removeChild(li);
  });

  // Clear the input field
  newItem.value = '';
});