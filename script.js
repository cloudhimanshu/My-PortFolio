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