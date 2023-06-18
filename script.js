// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Show the button when the user scrolls down a certain amount
window.onscroll = function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Show or hide the button based on screen size
function toggleScrollToTopBtn() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.matchMedia("(max-width: 600px)").matches) {
    scrollToTopBtn.style.display = "none";
  } else {
    scrollToTopBtn.style.display = "block";
  }
}

// Call the toggleScrollToTopBtn function initially and whenever the window is resized
toggleScrollToTopBtn();
window.addEventListener("resize", toggleScrollToTopBtn);
