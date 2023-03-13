 var yourArray=['sandip', 'chhetry', 24, "before each", "should contain string", true];

// Add each element of yourArray to the unordered list in the HTML
for (let i = 0; i < yourArray.length; i++) {
  let listItem = document.createElement('li');
  listItem.textContent = yourArray[i];
  document.getElementById('list').appendChild(listItem);
}