$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

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

var links = document.querySelectorAll(".link");
links.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var content = link.nextElementSibling;
    var allContent = document.querySelectorAll(".content");
    allContent.forEach(function(c) {
      c.style.display = "none";
    });
    content.style.display = "block";
  });
});

