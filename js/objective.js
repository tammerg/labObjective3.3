debugger;
var deleteButtons = document.getElementsByTagName('button');
var addButtons = document.getElementById('btn1');

for(var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function() {
    var rowToDelete = this.parentNode.parentNode;
    alert("Bye Bye");
    rowToDelete.parentNode.removeChild(rowToDelete)});
  else(var i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", function() {
  var rowToAdd = cell1.innerHTML = "NEW CELL1";
  }
