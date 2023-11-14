document.addEventListener('DOMContentLoaded', function() {
  const showHidePasswordI = document.getElementById('show_hide_password').querySelector('i');
  const showHidePasswordInput = document.getElementById('show_hide_password').querySelector('input');

  document.getElementById('show_hide_password').querySelector('.input-group-addon').addEventListener('click', function(event) {
    event.preventDefault();

    if (showHidePasswordInput.type === 'text') {
      showHidePasswordInput.type = 'password';
      showHidePasswordI.classList.add('fa-eye-slash');
      showHidePasswordI.classList.remove('fa-eye');
    } else if (showHidePasswordInput.type === 'password') {
      showHidePasswordInput.type = 'text';
      showHidePasswordI.classList.remove('fa-eye-slash');
      showHidePasswordI.classList.add('fa-eye');
    }
  });
});