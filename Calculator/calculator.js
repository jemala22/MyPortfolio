// Get the loading element
var loading = document.getElementById("loading");
// Get the content element
var content = document.getElementById("content");

// When the page is loading, show the loading animation and hide the content
window.addEventListener("load", function() {
  loading.style.display = "block";
  content.style.display = "none";
  setTimeout(function() {
    loading.style.display = "none";
    content.style.display = "block";
  }, 1500);
});
