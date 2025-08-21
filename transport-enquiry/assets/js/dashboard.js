// Sidebar Toggle (Hamburger Icon)
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const closeBtn = document.querySelector('.close-btn');

// Toggle Sidebar Open/Close
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  mainContent.classList.toggle('shifted');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
  mainContent.classList.remove('shifted');
});

// Handling Section Navigation
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

navBtns.forEach(button => {
  button.addEventListener('click', () => {
    const targetSection = document.getElementById(button.getAttribute('data-target'));
    
    sections.forEach(section => section.classList.remove('active'));
    targetSection.classList.add('active');
  });
});
