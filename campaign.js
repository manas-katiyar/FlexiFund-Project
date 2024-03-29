// Get the form
var form = document.querySelector('form');

// Add an event listener to the form's submit button
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting

  // Get the form inputs' values
  var campaignName = document.getElementById('campaign-name').value;
  var campaignDescription = document.getElementById('campaign-description').value;
  var minContribution = document.getElementById('min-contribution').value;
  var targetAmount = document.getElementById('target-amount').value;
  var imageUrl = document.getElementById('image-url').value;

  // Do something with the form data (e.g. send it to a server)
  console.log(campaignName, campaignDescription, minContribution, targetAmount, imageUrl);
});

// Add an event listener to the back button
var backButton = document.querySelector('.btn-back');
backButton.addEventListener('click', function() {
  // Go back to the previous page (e.g. using
});