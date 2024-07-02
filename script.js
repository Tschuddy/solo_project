// Smooth scrolling for the "Get Started" button
document.querySelector('a[href="#features"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  });
});
