## Projeto "Gerador de QR Code"

Este é um projeto simples para gerar QR Code, desenvolvido com HTML, CSS, JavaScript e API.
Este projeto consiste em uma aplicação web para gerar códigos QR a partir de URLs ou texto inserido pelo usuário. O código QR gerado pode ser utilizado para direcionar a um site específico ou para armazenar informações de texto. 
Este projeto foi criado como parte de curso de formação frontend.

## Stack utilizada

- HTML 
- CSS
- JavaScript
- API https://goqr.me/api/

## Funcionalidades

- Interface do Usuário (HTML e CSS):
    Um formulário que permite ao usuário inserir a URL ou texto para o qual deseja gerar o QR Code.
    Um botão "Gerar QR Code" para iniciar o processo e uma área de exibição onde o QR Code gerado será mostrado.

- Design responsivo (CSS):
    A página possui alguma estrutura de responsividade para garantir uma boa experiência em diferentes tamanhos de tela.
    
- Limpeza e apresentação (JavaScript):
    Antes de gerar um novo QR Code, a função JavaScript limpa a área de exibição para garantir que códigos anteriores não interfiram.

- Lógica (JavaScript):
    Quando o formulário é enviado, a função JavaScript é chamada para gerar o QR Code. A função utiliza a API GoQR.me para criar dinamicamente o código QR a partir da URL ou texto fornecidos.

- Feedback Visual (CSS e JavaScript):
    Os botões acompanham o processo durante a geração do QR Code, tornando a interação mais intuitiva para o usuário, com feedback visual .

## Estrutura do Projeto

- `index.html`: Página principal que contém o formulário e a exibição do QR Code.
- `css/styles.css`: Estilos CSS para a aparência da página.
- `js/scripts.js`:  Lógica JavaScript para interação com o formulário e geração do QR Code.


## Autores

- [@RaquelGui](https://www.github.com/RaquelGui)

Sinta-se à vontade para utilizar, modificar e adaptar este conteúdo, de acordo com as necessidades específicas do seu projeto. 