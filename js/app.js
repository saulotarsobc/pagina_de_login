// MOSTRA SENHA
document.getElementById('icon_password').addEventListener('click', function() {
    const password = document.getElementById('password');
    var type = password.type;


    if (type == "password") {
        password.type = "text";
        this.src = "./img/eye.svg"
        password.placeholder = 'su@-Senha';
    } else {
        password.type = "password";
        this.src = "./img/olho-no.svg";
        password.placeholder = '************';
    }



});

// LEMBRA SENHA
document.getElementById('lembra_senha').addEventListener('change', function() {
    var icon_toggle = document.getElementById('icon_toggle');
    if (this.checked) {
        icon_toggle.src = "./img/toggle2-on.svg";
    } else {
        icon_toggle.src = "./img/toggle2-off.svg";
    }
})