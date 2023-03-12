const form = document.getElementById('myForm');
const table = document.getElementById('myTable').getElementsByTagName('tbody')[0];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = form.firstName.value;
  const lastName = form.lastName.value;
  const address = form.address.value;
  const pincode = form.pincode.value;
  const gender = form.gender.value;
  const food = [];
  const foodInputs = form.querySelectorAll('input[name=food]:checked');
  for (let i = 0; i < foodInputs.length; i++) {
    food.push(foodInputs[i].value);
  }
  const state = form.state.value;
  const country = form.country.value;

  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  const cell4 = row.insertCell();
  const cell5 = row.insert
