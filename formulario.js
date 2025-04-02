const form = document.querySelector('.form');
const campos = form.querySelectorAll('.required');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const telefone = document.getElementById("telefone");
const cepInput = document.getElementById('cep');

document.getElementById('nome').addEventListener('input', validarNome);
document.getElementById('cpf').addEventListener('input', () => validarCpf(document.getElementById('cpf').value));
document.getElementById('senha').addEventListener('input', validarSenha);
document.getElementById('confirmarSenha').addEventListener('input', compareSenha);
document.getElementById('email').addEventListener('input', validarEmail);


form.addEventListener("submit", (event) => {
    event.preventDefault();

    let algumCampoVazio = false;
    campos.forEach(campo => {
        if (campo.tagName === 'SELECT' && !campo.value) {
            setError(campo);
            campo.closest('.form-group').querySelector('.span-required').
                textContent = "Campo obrigatório";
            document.getElementById("labelFile").style.border = "2px solid red"
            document.getElementById("labelFile2").style.border = "2px solid red"

            algumCampoVazio = true;
        } else if (!campo.value.trim()) {
            setError(campo);
            campo.closest('.form-group').querySelector('.span-required').textContent = "Campo obrigatório";
            algumCampoVazio = true;
        } else {
            removeError(campo);
        }
    });

    if (!validarTrilha()) {
        algumCampoVazio = true;
    }

    if (!validarTermos()) {
        algumCampoVazio = true;
    }

    if (algumCampoVazio) {
        return;
    }

    validarNome();
    validarCpf(document.getElementById('cpf').value);
    validarEmail();
    validarSenha();
    compareSenha();
    validarTrilha();
    pesquisaCep(cepInput.value);

    console.log("Formuário enviado")
});

//função para mostrar span de erro - concluída
function setError(campo) {
    campo.style.border = "2px solid #e63636";
    campo.closest('.form-group').querySelector('.span-required').style.display = 'block';
}
// função para remover span de erro - concluída
function removeError(campo) {
    campo.style.border = "";
    campo.closest('.form-group').querySelector('.span-required').style.display = 'none';
}


//função para validar nome - concluída
const nomeInput = document.getElementById('nome');
function validarNome() {
    if (nome.length < 4) {
        setError(nomeInput);
        nomeInput.closest('.form-group').querySelector('.span-required').textContent = "Nome deve ter no mínimo 4 letras";
        return;
    }
    removeError(nomeInput);
}


//função para verificar e validar cpf - concluída 
const validarCpf = (cpf) => {
    const cpfInput = document.getElementById('cpf');
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) {
        setError(cpfInput);
        cpfInput.closest('.form-group').querySelector('.span-required').textContent = "CPF inválido. Campo não possui 11 caracteres";
        return;
    }
    const proximoDigitoVerificador = (cpfIncompleto) => {
        let somatoria = 0;
        for (let i = 0; i < cpfIncompleto.length; i++) {
            somatoria += Number(cpfIncompleto.charAt(i)) * (cpfIncompleto.length + 1 - i);
        }
        const resto = somatoria % 11;
        return resto < 2 ? "0" : (11 - resto).toString();
    };
    const primeiroDigitoVerificador = proximoDigitoVerificador(cpf.substring(0, 9));
    const segundoDigitoVerificador = proximoDigitoVerificador(cpf.substring(0, 9) + primeiroDigitoVerificador);
    const cpfCorreto = cpf.substring(0, 9) + primeiroDigitoVerificador + segundoDigitoVerificador;
    if (cpf !== cpfCorreto) {
        setError(cpfInput);
        cpfInput.closest('.form-group').querySelector('.span-required').textContent = "CPF inválido. Dígitos verificadores não conferem";
        return;
    }
    removeError(cpfInput);
};


//função para validar senha e compará-la com a confirmação de senha - concluída
function validarSenha() {
    const senhaInput = document.getElementById('senha');
    const senha = senhaInput.value;
    if (senha.length < 8) {
        setError(senhaInput);
        senhaInput.closest('.form-group').querySelector('.span-required').textContent = "Senha deve ter no mínimo 8 caracteres.";
        return false;
    }
    removeError(senhaInput);
    return true;
}
let passwordIcon = document.getElementById("passwordIcon");
let senha = document.getElementById("senha");
//função para exibir senha com ícone - concluída
passwordIcon.onclick = function () {
    if (senha.type == "password") {
        senha.type = "text";
        passwordIcon.src = "css/icones/eye-fill.svg"; // Ícone para exibir a senha
    } else {
        senha.type = "password";
        passwordIcon.src = "css/icones/eye-slash-fill.svg"; // Ícone para ocultar a senha
    }
}

function compareSenha() {
    const senhaInput = document.getElementById("senha");
    const senha = senhaInput.value;
    const compareSenhaInput = document.getElementById("confirmarSenha");
    const compareSenha = compareSenhaInput.value;
    if (senha === compareSenha) {
        removeError(compareSenhaInput);
    } else {
        setError(compareSenhaInput);
        compareSenhaInput.closest('.form-group').querySelector('.span-required').textContent = "As senhas devem ser iguais";
    }
}
let passwordIcon2 = document.getElementById("passwordIcon2");
let confirmarSenha = document.getElementById("confirmarSenha");
//função para exibir confirmação de senha com ícone - concluída
passwordIcon2.onclick = function () {
    if (confirmarSenha.type == "password") {
        confirmarSenha.type = "text";
        passwordIcon2.src = "css/icones/eye-fill.svg"; // Ícone para exibir a confirmarSenha2
    } else {
        confirmarSenha.type = "password";
        passwordIcon2.src = "css/icones/eye-slash-fill.svg"; // Ícone para ocultar a senha
    }
}


//função para validar e-mail - concluída
function validarEmail() {
    const emailInput = document.getElementById('email');
    if (!emailRegex.test(emailInput.value)) {
        setError(emailInput);
        emailInput.closest('.form-group').querySelector('.span-required').textContent = "Digite um e-mail válido";
    } else {
        removeError(emailInput);
    }
}


//função para validar número de celular - concluída
telefone.addEventListener("input", function () {
    let limparValor = telefone.value.replace(/\D/g, "").substring(0, 11);
    let numerosArray = limparValor.split("");
    let numeroFormatado = "";
    if (numerosArray.length > 0) {
        numeroFormatado += `(${numerosArray.slice(0, 2).join("")})`;
    }
    if (numerosArray.length > 2) {
        numeroFormatado += ` ${numerosArray.slice(2, 7).join("")}`;
    }
    if (numerosArray.length > 7) {
        numeroFormatado += `-${numerosArray.slice(7, 11).join("")}`;
    }
    telefone.value = numeroFormatado;
    if (limparValor.length > 0 && limparValor.length < 11) {
        setError(telefone);
    } else {
        removeError(telefone);
    }
});


//função para adicionar nome do arquivo selecionado no input type="file" - concuída
const arquivoInput1 = document.getElementById('arquivo1');
const fileUploadText1 = document.getElementById('file-upload-text1');
const fileUploadLabel1 = document.querySelector('label[for="arquivo1"]');
arquivoInput1.addEventListener('change', () => {
    if (arquivoInput1.files.length > 0) {
        fileUploadText1.textContent = arquivoInput1.files[0].name;
        fileUploadText1.style.color = '#2135A6'; // Altera a cor do texto 
        fileUploadLabel1.style.borderColor = '#2135A6';
        fileUploadLabel1.style.border = '2px solid #2135A6';
    } else {
        fileUploadText1.textContent = 'Clique aqui para selecionar o arquivo';
        fileUploadText1.style.color = '';
        fileUploadLabel1.style.borderColor = '';
    }
});


//função para validar cep e preencher campos 'Cidade' e 'UF' - concluída
function pesquisaCep(valor) {
    let cep = valor.replace(/\D/g, '');
    const cepInput = document.getElementById('cep');
    if (cep !== "") {
        const validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            removeError(cepInput);
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            const script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        } else {
            limpa_formulario_cep();
            setError(cepInput);
            cepInput.closest('.form-group').querySelector('.span-required').textContent = "Formato de CEP inválido";
        }
    } else {
        limpa_formulario_cep();
        setError(cepInput);
        cepInput.closest('.form-group').querySelector('.span-required').textContent = "Insira um CEP válido";
    }
}
function limpa_formulario_cep() {
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
}
function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('cidade').value = conteudo.localidade;
        const ufSelect = document.getElementById('uf');
        const uf = conteudo.uf;
        for (let i = 0; i < ufSelect.options.length; i++) {
            if (ufSelect.options[i].value === uf) {
                ufSelect.selectedIndex = i;
                break;
            }
        }
        // Disparar o evento personalizado
        const eventoCepCompleto = new Event('cepCompleto');
        document.getElementById('cep').dispatchEvent(eventoCepCompleto);
    } else {
        limpa_formulario_cep();
        const cepInput = document.getElementById('cep');
        setError(cepInput);
        cepInput.closest('.form-group').querySelector('.span-required').style.display = 'block';
        cepInput.closest('.form-group').querySelector('.span-required').textContent = "CEP não encontrado.";
    }
}

document.getElementById('cep').addEventListener('cepCompleto', function () {
    salvarInform();
});

//função para adicionar nome do arquivo selecionado no input type="file" - concluída
const arquivoInput2 = document.getElementById('arquivo2');
const fileUploadText2 = document.getElementById('file-upload-text2');
const fileUploadLabel2 = document.querySelector('label[for="arquivo2"]');
arquivoInput2.addEventListener('change', () => {
    if (arquivoInput2.files.length > 0) {
        fileUploadText2.textContent = arquivoInput2.files[0].name;
        fileUploadText2.style.color = '#2135A6';
        fileUploadLabel2.style.borderColor = '#2135A6';
        fileUploadLabel2.style.border = '2px solid #2135A6';
    } else {
        fileUploadText2.textContent = 'Clique aqui para selecionar o arquivo';
        fileUploadText2.style.color = '';
        fileUploadLabel2.style.borderColor = '';
    }
});


//função para validar radios - concluída
function validarTrilha() {
    var radios = document.getElementsByName("trilha"); // Corrigido o nome "trilhas" para "trilha"
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            formValid = true;
            break;
        }
    }

    if (!formValid) {
        document.getElementById("trilha-erro").style.display = "block"; // Exibe a mensagem de erro
        return false; // Importante retornar false para impedir o envio do formulário
    } else {
        document.getElementById("trilha-erro").style.display = "none"; // Oculta a mensagem de erro se a validação passar
        return true; // Importante retornar true para permitir o envio do formulário
    }
}


//função para validar termo de consentimento - concuída
function validarTermos() {
    const termos = document.getElementById('termos');
    if (!termos.checked) {
        document.getElementById('termos-erro').style.display = 'block';
        return false;
    } else {
        document.getElementById('termos-erro').style.display = 'none';
        return true;
    }
}


