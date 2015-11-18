var deleteButtons = document.getElementsByClassName('btn btn-danger')

for(var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function() {
    var rowToDelete = this.parentNode.parentNode;
    rowToDelete.parentNode.removeChild(rowToDelete)
  }); 
}
