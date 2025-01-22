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
const easeOutCubic = (t) => 1 - (Math.pow(1 - t, 3))*80;

    // Function to animate text with EaseOutCubic easing
    function animateText(containerId, delay, duration, onComplete) {
      const container = document.getElementById(containerId);
      const text = container.textContent; // Get the text from the container
      container.textContent = ''; // Clear the container

      // Split the text into letters and wrap them in spans
      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        container.appendChild(span);

        // Add animation with easeOutCubic easing
        setTimeout(() => {
          const start = performance.now();

          function step(timestamp) {
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1); // Clamp progress to 1
            const easedProgress = easeOutCubic(progress);

            // Update opacity and transform based on eased progress
            span.style.opacity = easedProgress;
            span.style.transform = `translate3d(0, ${50 * (1 - easedProgress)}px, 0)`;

            if (progress < 1) {
              requestAnimationFrame(step);
            } else if (index === text.length - 1 && typeof onComplete === 'function') {
              onComplete(); // Call onComplete after the last animation
            }
          }

          requestAnimationFrame(step);
        }, index * delay); // Delay between letters
      });
    }

    // Start the first animation
    animateText('text-container-1', 150, 1000, () => {
      console.log('First text animation completed!');

      // Make the second text visible before animating it
      const secondText = document.getElementById('text-container-2');
      secondText.style.opacity = 1; // Reveal the second text

      // Start the animation for the second text after it becomes visible
      animateText('text-container-2', 150, 1000, () => {
        console.log('Second text animation completed!');
      });
    });