$(document).ready(function() {
    const showHidePasswordI = $('#show_hide_password i')
    const showHidePasswordInput = $('#show_hide_password input')
    $("#show_hide_password .input-group-addon").on('click', function(event) {
        event.preventDefault();
        if(showHidePasswordInput.attr("type") === "text"){
            showHidePasswordInput.attr('type', 'password');
            showHidePasswordI.addClass( "fa-eye-slash" );
            showHidePasswordI.removeClass( "fa-eye" );
        }else if(showHidePasswordInput.attr("type") === "password"){
            showHidePasswordInput.attr('type', 'text');
            showHidePasswordI.removeClass( "fa-eye-slash" );
            showHidePasswordI.addClass( "fa-eye" );
        }
    });
});