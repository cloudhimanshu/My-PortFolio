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
const textOptions = ['Developer', 'Video Editor', 'Designer'];

// Get the h2 element
const dynamicTextElement = document.getElementById('dynamicText');

// Set an index variable to keep track of the current text
let currentIndex = 0;

// Function to update the text with typewriting animation
function updateText() {
    const targetText = textOptions[currentIndex];
    let currentCharIndex = 0;

    // Clear previous text and start typewriting
    dynamicTextElement.textContent = '';

    function typeWriter() {
        if (currentCharIndex < targetText.length) {
            dynamicTextElement.textContent += targetText.charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeWriter, 200 ,300); // Adjust the typing speed as needed
        } else {
            // Typing finished, move to the next text
            currentIndex = (currentIndex + 1) % textOptions.length;
            setTimeout(updateText, 300); // Delay before starting to type the next text
        }
    }

    // Start the typewriting animation
    typeWriter();
}

// Initial update
updateText();

// Update the text every 3 seconds (adjust the interval as needed)
setInterval(updateText, 100000); // Adjust the interval to match the total typewriting time



// Toggle dark mode
document.getElementById('darkModeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});
