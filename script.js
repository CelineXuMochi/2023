$(document).ready(function () {
  // Access elements and implement interactivity here

  // Dark/Light mode switch
  $("#mode-switch").on("click", function () {
    // Toggle dark mode class on the body
    $("body").toggleClass("dark-mode");

  });
});
