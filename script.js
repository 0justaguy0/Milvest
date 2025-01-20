// Get modal and button elements
const loginModal = document.getElementById('login-modal');
const loginBtn = document.getElementById('login-btn');
const closeBtn = document.getElementById('close-btn');

// Open modal on button click
loginBtn.addEventListener('click', () => {
  loginModal.classList.add('active');
});

// Close modal on close button click
closeBtn.addEventListener('click', () => {
  loginModal.classList.remove('active');
});

// Close modal on clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.classList.remove('active');
  }
});

