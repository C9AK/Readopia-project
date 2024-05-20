document.addEventListener("DOMContentLoaded", function() {
    // Update the height of the centered image to fit the page
    function updateImageHeight() {
      var windowHeight = window.innerHeight;
      var image = document.querySelector(".centered-image img");
      var imageHeight = image.offsetHeight;
  
      // Calculate the maximum height for the image
      var maxImageHeight = windowHeight - 100; // Adjust the value (100) as needed
  
      // Set the image height to the maximum height
      if (imageHeight > maxImageHeight) {
        image.style.height = maxImageHeight + "px";
      }
    }
  
    // Call the updateImageHeight function initially
    updateImageHeight();
  
    // Call the updateImageHeight function whenever the window is resized
    window.addEventListener("resize", updateImageHeight);
  
    // Handle dropdown menu
    var dropdownLinks = document.querySelectorAll(".nav-link.dropdown-toggle");
  
    dropdownLinks.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        var dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle("show");
      });
    });
  
    // Close dropdown menu when clicking outside
    document.addEventListener("click", function(e) {
      var target = e.target;
      if (!target.classList.contains("dropdown-toggle")) {
        var dropdownMenus = document.querySelectorAll(".dropdown-menu");
        dropdownMenus.forEach(function(menu) {
          if (menu.classList.contains("show")) {
            menu.classList.remove("show");
          }
        });
      }
    });
  });