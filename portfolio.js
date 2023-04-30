// Get the current year
const year = new Date().getFullYear();

// Display the current year in the footer
const yearElement = document.querySelector('footer p');
yearElement.innerHTML += ` ${year}`;

// Update the contact email when user clicks on it
const emailElement = document.querySelector('footer p:nth-of-type(2)');
emailElement.addEventListener('click', () => {
  const newEmail = prompt('Enter your new email');
  emailElement.innerHTML = `Contact us: ${newEmail}`;
});
