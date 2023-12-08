document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Message sent!'); // You can customize this part to handle the form submission.
    });
  });
  function handleOnlineStatus() {
    if (navigator.onLine) {
      // User is online, show regular content
      document.getElementById('offline-message').style.display = 'none';
      document.getElementById('regular-content').style.display = 'block';
    } else {
      // User is offline, show custom offline page
      document.getElementById('offline-message').style.display = 'block';
      document.getElementById('regular-content').style.display = 'none';
    }
  }

  // Initial check on page load
  handleOnlineStatus();

  // Add event listener to handle changes in online status
  window.addEventListener('online', handleOnlineStatus);
  window.addEventListener('offline', handleOnlineStatus);


   // Array of text options
   const textOptions = ['Web Developer', 'Video Editor', 'Designer'];

   // Get the h2 element
   const dynamicTextElement = document.getElementById('dynamicText');

   // Set an index variable to keep track of the current text
   let currentIndex = 0;

   // Function to update the text with animation
   function updateText() {
       dynamicTextElement.classList.remove('animate__fadeIn'); // Remove previous animation class

       // Add animation class, wait for the animation to complete, then update the text
       dynamicTextElement.classList.add('animate__fadeOut');
       setTimeout(() => {
           dynamicTextElement.textContent = textOptions[currentIndex];
           currentIndex = (currentIndex + 1) % textOptions.length;
           dynamicTextElement.classList.remove('animate__fadeOut');
           dynamicTextElement.classList.add('animate__fadeIn');
       }, 500); // Adjust the delay as needed
   }

   // Update the text every 3 seconds (adjust the interval as needed)
   setInterval(updateText, 3000);