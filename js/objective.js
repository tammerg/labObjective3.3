var deleteButtons = document.getElementsByTagName('button');
var rowToDelete = this.parentNode.parentNode;

for(var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function() {
    alert("Bye Bye");
    rowToDelete.parentNode.removeChild(rowToDelete)
  }); 
}
