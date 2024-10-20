var djangoPasswordEyeElements = djangoPasswordEyeElements || undefined;

function togglePasswordEyeInput(input, iElement) {
  if(input == null) {
    return null;
  } else if (input.type === 'text') {
    input.type = 'password';
    iElement.classList.add('fa-eye-slash');
    iElement.classList.remove('fa-eye');
  } else if (input.type === 'password') {
    input.type = 'text';
    iElement.classList.remove('fa-eye-slash');
    iElement.classList.add('fa-eye');
  }
}

if(typeof djangoPasswordEyeElements === 'undefined') {
  djangoPasswordEyeElements = [];

  function djangoPasswordEyeClickHandler(event) {
    event.preventDefault();
    for (let i = 0; i < djangoPasswordEyeElements.length; i++) {
      const element = djangoPasswordEyeElements[i];
      const independent = element.dataset.independent === '1';
      if(independent) {
        continue;
      }
      const iElement = element.querySelector('i');
      const input = element.querySelector('input');
      togglePasswordEyeInput(input, iElement);
    }
  }

  function djangoPasswordEyeClickUniqueHandler(event) {
    event.preventDefault();
    let iElement = event.target;
    if (iElement.tagName === 'DIV') {
      iElement = iElement.querySelector('i');
    }
    const input = event.target.closest('.input-group').querySelector('input');
    togglePasswordEyeInput(input, iElement);
  }

  document.addEventListener('DOMContentLoaded', function () {
    djangoPasswordEyeElements = document.getElementsByClassName('django_password_eye');
    for (let i = 0; i < djangoPasswordEyeElements.length; i++) {
      let independent = djangoPasswordEyeElements[i].dataset.independent === '1';
      let eventListener = independent ? djangoPasswordEyeClickUniqueHandler : djangoPasswordEyeClickHandler;
      djangoPasswordEyeElements[i]
          .querySelector('.input-group-addon')
          .addEventListener('click', eventListener);
    }
  });
}