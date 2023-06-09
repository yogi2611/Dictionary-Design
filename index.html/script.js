// Function to handle search button click
document.getElementById("search-button").addEventListener("click", function() {
   var searchInput = document.getElementById("search-input").value;
   // Perform search functionality here
   // Example: Display the search results
   alert("Searching for: " + searchInput);
});

// Function to handle delete button click
var deleteButtons = document.getElementsByClassName("delete-button");
for (var i = 0; i < deleteButtons.length; i++) {
   deleteButtons[i].addEventListener("click", function() {
       // Perform delete functionality here
       // Example: Remove the corresponding word box
       this.parentNode.remove();
   });
}
