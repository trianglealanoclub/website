window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let thisForm = this;
    emailjs.sendForm('service_blf1avi', 'template_qpgjfdg', this)
      .then(function () {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset();
      })
      .catch((error) => {
        const errorMessage = JSON.stringify(error);
        displayError(thisForm, errorMessage);
      });
  });
  function displayError(thisForm, errorMessage) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = errorMessage;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }
}();