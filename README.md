# Plataforma de Inscrição para o Programa Trilhas do Maranhão

Este projeto visa modernizar o sistema de inscrição online do programa de formação em tecnologia do Governo do Maranhão, tornando-o mais acessível e eficiente para os candidatos.

## Links Úteis

* **Formulário Estático de Inscrição:**
    * Vídeo de Demonstração: [https://youtu.be/teYhZm4qJGs?si=qL7V8Tuhnk9cHmrs](https://youtu.be/teYhZm4qJGs?si=qL7V8Tuhnk9cHmrs)
    * Documento de Referência: [https://docs.google.com/document/d/1kkS05oCWvpUM3mV5dtcO0LakqnifJQzseZMhEuGHcws/edit?usp=sharing](https://docs.google.com/document/d/1kkS05oCWvpUM3mV5dtcO0LakqnifJQzseZMhEuGHcws/edit?usp=sharing)
* **Processo de Inscrição e Seleção:** [https://docs.google.com/document/d/1krCP2A-fPOMOX-UsARjIUjAg7Q-JJWmui8DZWlAzl74/edit?usp=sharing](https://docs.google.com/document/d/1krCP2A-fPOMOX-UsARjIUjAg7Q-JJWmui8DZWlAzl74/edit?usp=sharing)

## 1. Visão Geral do Projeto

O formulário estático existente foi um passo inicial importante, mas este projeto busca aprimorá-lo com funcionalidades dinâmicas e uma interface mais intuitiva. Ao implementar validações robustas, armazenamento local de dados e um sistema de login, criaremos uma plataforma que oferece uma experiência de inscrição mais ágil e segura para os candidatos.

## 2. Benefícios para o Usuário

* Facilidade de uso: interface intuitiva e responsiva.
* Agilidade: validação de dados em tempo real e armazenamento local.

## 3. Execução Local

Para executar o projeto localmente, siga estas etapas:

1.  Acesse o link do Github pages do repositório: https://mazebelo.github.io/Projeto-Trilhas/.
2.  Preencha o formulário de inscrição do Projeto Trilhas.
3.  Para simular o armazenamento de dados, utilize o console do navegador e inspecione o `localStorage`.
    * Passo 01: clicar com o botão direito na tela e apertar em "Inspecionar elemento".
    * Passo 02: navegar até a sessão "Application" e conferir no LocalStorage os dados salvos que foram inserios no formulário.


<p align="center">
  <img src="https://raw.githubusercontent.com/mazebelo/Projeto-Trilhas/main/Screenshots/inspecionar.png" width="450" title="hover text">
  <img src="https://raw.githubusercontent.com/mazebelo/Projeto-Trilhas/main/Screenshots/application.png"  width="450" alt="accessibility text">
</p>




## 4. Tecnologias Utilizadas

* **HTML:** Estruturação da página web.
* **CSS:** Estilização e layout da interface.
* **JavaScript:** Interatividade, validação de dados e armazenamento local.
* **Bootstrap:** Framework CSS para responsividade e componentes visuais.

## 5. Funcionalidades Principais

* **Validação de Campos:**
    * E-mail (identificador de usuário).
    * CPF.
    * Telefone.
    * CEP.
    * Senha (critérios de segurança).
    * Arquivos enviados (input files).
    * Opções de escolha (input radios).
    * Termos de aceite (input checkbox).
* **Mensagens de Feedback:** Exibição clara de campos obrigatórios e erros de validação.
* **Armazenamento de Dados:** `localStorage` para armazenamento temporário.
* **Sistema de Login:** Verificação de conta e redirecionamento após cadastro.

## 6. Funcionalidades Adicionais

* Validação em tempo real.
* Máscaras de entrada (CPF, telefone, CEP).
* Acessibilidade (WCAG).
* Testes unitários (JavaScript).
