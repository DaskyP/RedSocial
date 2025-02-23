$(document).ready(function() {
    $('#gender').change(function() {
        if ($(this).val() === 'Otro') {
            $('#otherGender').removeClass('d-none').focus();
        } else {
            $('#otherGender').addClass('d-none').val('');
        }
    });
    
    $('#registerForm').submit(function(event) {
        event.preventDefault();
        
        let fullname = $('#fullname').val().trim();
        let username = $('#username').val().trim();
        let email = $('#email').val().trim();
        let gender = $('#gender').val();
        let birthdate = $('#birthdate').val();
        let password = $('#password').val().trim();
        let confirmPassword = $('#confirmPassword').val().trim();
        
        if (!fullname || !username || !email || !gender || !birthdate || !password || !confirmPassword) {
            alert("Todos los campos son obligatorios");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Por favor, ingrese un correo electrónico válido");
            return;
        }
        
        let birthdateObj = new Date(birthdate);
        let today = new Date();
        let age = today.getFullYear() - birthdateObj.getFullYear();
        let monthDiff = today.getMonth() - birthdateObj.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
            age--;
        }
        
        if (age < 18) {
            alert("Debes tener al menos 18 años");
            return;
        }
        
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        
        alert("Registro exitoso");
    });
});

function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
