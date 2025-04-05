
const formCadastro = document.querySelector('#quadro form.form-group'); 
if (formCadastro) {
    const camposCadastro = formCadastro.querySelectorAll('.required');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    document.getElementById('verSenha').addEventListener('input', validarSenha); 
    document.getElementById('verEmail').addEventListener('input', validarEmail);

    formCadastro.addEventListener("submit", (event) => {
        event.preventDefault();

        let algumCampoVazio = false;
        camposCadastro.forEach(campo => {
            if (!campo.value.trim()) {
                setError(campo);
                campo.closest('.form-group').querySelector('.span-required').textContent = "Preencha esse campo";
                algumCampoVazio = true;
            } else {
                removeError(campo);
            }
        });

        if (algumCampoVazio) {
            return;
        }

        validarEmail();
        validarSenha();

    });

    function setError(campo) {
        campo.style.border = "2px solid #e63636";
        campo.closest('.form-group').querySelector('.span-required').style.display = 'block';
    }

    function removeError(campo) {
        campo.style.border = "";
        campo.closest('.form-group').querySelector('.span-required').style.display = 'none';
    }

    function validarEmail() {
        const verEmail = document.getElementById('verEmail');
        if (!emailRegex.test(verEmail.value)) {
            setError(verEmail);
            verEmail.closest('.form-group').querySelector('.span-required').textContent = "Digite um e-mail válido";
        } else {
            removeError(verEmail);
        }
    }

    function validarSenha() {
        const verSenha = document.getElementById('verSenha');
        const senha = verSenha.value;
        if (senha.length < 8) {
            setError(verSenha);
            verSenha.closest('.form-group').querySelector('.span-required').textContent = "Senha deve ter no mínimo 8 caracteres.";
            return false;
        }
        removeError(verSenha);
        return true;
    }
}


let passwordIcon = document.getElementById("passwordIcon");
let verSenhaIcon = document.getElementById("verSenha");

passwordIcon.onclick = function () {
    if (verSenhaIcon.type == "password") {
        verSenhaIcon.type = "text";
        passwordIcon.src = "css/icones/eye-fill.svg";
    } else {
        verSenhaIcon.type = "password";
        passwordIcon.src = "css/icones/eye-slash-fill.svg";
    }
}

const formLogin = document.querySelector('#quadro form.form-group'); 

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    verificarUsuario(); 
});

function verificarUsuario() {
    const emailInput = document.getElementById('verEmail').value;
    const senhaInput = document.getElementById('verSenha').value;

    const usuariosString = localStorage.getItem('usuarios');
    if (usuariosString) {
        const usuarios = JSON.parse(usuariosString);
        let usuarioEncontrado = null;

        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];
            if (usuario.email === emailInput && usuario.senha === senhaInput) {
                usuarioEncontrado = usuario;
                break; 
            }
        }

        if (usuarioEncontrado) {
            alert(`Login realizado com sucesso! Seja bem-vindo(a), ${usuarioEncontrado.nome}`);
        }else{
            alert("Usuário não encontrado. E-mail ou senha incorreta.");
        }
    } else {
        alert("Nenhum usuário cadastrado ainda.");
    }
}