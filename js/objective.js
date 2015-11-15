var deleteButtons = document.getElementsByTagName('button');

for(var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function() {
    alert("Bye Bye");
    rowToDelete = this.parentNode.parentNode
    rowToDelete.parentNode.removeChild(rowToDelete)
  }); 
}
