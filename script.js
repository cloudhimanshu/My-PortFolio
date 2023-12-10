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
          setTimeout(typeWriter, 300 ,300); // Adjust the typing speed as needed
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
// Update the text every 3 seconds (adjust the interval as needed)
setInterval(updateText, 1200000000000);
// Adjust the interval to match the total typewriting time



// Function to toggle dark mode
function toggleDarkMode() {
// Toggle dark mode class on the body
document.body.classList.toggle('dark-mode');

// Toggle between sun and moon icons
const sunIcon = document.getElementById('sun');
const moonIcon = document.getElementById('moon');
sunIcon.classList.toggle('hidden');
moonIcon.classList.toggle('hidden');

// Toggle between styles.css and darkmode.css
const darkModeStylesheet = document.getElementById('darkModeStylesheet');
if (darkModeStylesheet) {
  // If dark mode stylesheet exists, remove it
  darkModeStylesheet.remove();
} else {
  // If dark mode stylesheet doesn't exist, create and append it
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'darkmode.css';
  link.id = 'darkModeStylesheet';
  document.head.appendChild(link);
}
}

// Toggle dark mode on button click
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);