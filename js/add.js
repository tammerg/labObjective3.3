

var deleteButtons = document.getElementsByClassName('remover');
var deleteLength = deleteButtons.length;
var adderButton = document.getElementById('adder');
adderButton.addEventListener("click", addRow);
function addRow(){
  var customerTable = document.getElementById('customer-table');
  var firstName = document.getElementById('first-name-entry');
  var lastName = document.getElementById('last-name-entry');
  var email = document.getElementById('email-entry');
  var cool = document.getElementById('how-cool');
  var emailValue = email.value;
  var newRow = customerTable.insertRow(customerTable.rows.length - 1);
  newRow.className += 'customer';

  for(var i=0; i<4; i++){
    var td = document.createElement('td');
    var delButton = document.createElement('button');
    if(i===0){
      td.textContent = firstName.value;
    }if(i===1){
      td.textContent = lastName.value;
    }if(i===2){
      td.textContent = email.value;
    }if(i===3){
      td.textContent = cool.value;
    }if(i===4){
      delButton.className += 'btn btn-danger remover';
      delButton.textContent = 'Delete';
      td.appendChild(delButton);
    }
    newRow.appendChild(td);
  }
  // Clear input fields when adding row
    (function(){
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      cool.value = '';
    })();

}