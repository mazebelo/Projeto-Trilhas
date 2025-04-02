//comportamento padrãp do envio do formulário é impedido
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    salvarInform(); // função para processas os dados do formulário
});

let dadosUsuario = {
    nome: "",
    dataNasc: "",
    cpf: "",
    sexo: '',
    senha: "",
    email: "",
    tel: "",
    cep: "",
    rua: "",
    numero: "",
    cidade: "",
    uf: "",
    trilha: "",
    termos: "",
};

function salvarInform() {
    dadosUsuario.nome = document.getElementById('nome').value; //coletando valor de nome
    dadosUsuario.dataNasc = document.getElementById('dataNascimento').value; //coletando valor da data de nascimento
    dadosUsuario.cpf = document.getElementById('cpf').value; //coletando valor do cpf
    dadosUsuario.sexo = document.getElementById('sexo').value; //coletando valor do sexo
    dadosUsuario.senha = document.getElementById('senha').value; //coletando valor da senha
    dadosUsuario.email = document.getElementById('email').value; //coletando valor do email
    dadosUsuario.tel = document.getElementById('telefone').value; //coletando valor do numero de telefone
    dadosUsuario.cep = document.getElementById('cep').value; //coletando valor do cep
    dadosUsuario.rua = document.getElementById('rua').value; //coletando valor do nome da rua
    dadosUsuario.numero = document.getElementById('numero').value; //coletando valor do numero da casa
    dadosUsuario.cidade = document.getElementById('cidade').value; //coletando valor da cidade
    dadosUsuario.uf = document.getElementById('uf').value; //coletando valor da Unidade Federal


    //verificando se o campo de input file 1 possui algo inserido, se sim retorna a mensagem "Documento inserido" e o nome do arquivo
    let arquivoInput1 = document.getElementById('arquivo1');
    if (arquivoInput1.files.length > 0) {
        dadosUsuario.arquivo1 = "Documento inserido:" + arquivoInput1.files[0].name;

    }

    //verificando se o campo de input file 2 possui algo inserido, se sim retorna a mensagem "Documento inserido" e o nome do arquivo
    let arquivoInput2 = document.getElementById('arquivo2');
    if (arquivoInput2.files.length > 0) {
        dadosUsuario.arquivo2 = "Documento inserido:" + arquivoInput2.files[0].name;

    }


    //verificando se a checkbox de "termos" está marcada, se sim, altero o valor da string vazia para "Termos aceitos"
    if (document.getElementById('termos').checked) {
        dadosUsuario.termos = "Termos aceitos";
    } else {
        dadosUsuario.termos = "Termos não aceitos"
    }


    //coletando valor das trilhas e verificando qual das opções de input radio está marcada e exibindo o value da mesma
    let trilhas = document.getElementsByName('trilha');
    for (let trilha of trilhas) {
        if (trilha.checked) {
            dadosUsuario.trilha = trilha.value;
            break;
        }
    }


    //transformando os objetos em stringis JSON em formato de texto para ser armazenado. Salvando as informações no localStorage com a chave "dadosUsuarios"
    localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
    console.log('Dados Salvos:', dadosUsuario);

    //recupera os dados salvos no localStorage com a chave "dadosUsuario", convertendo-os para objetos JS e exibindo esse objeto no console por meio do console.log
    let dadosRecuperados = JSON.parse(localStorage.getItem('dadosUsuario'));
    console.log('Dados recuperados:', dadosRecuperados)
}





