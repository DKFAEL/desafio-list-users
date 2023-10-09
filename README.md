# User-List



## Descrição

Este é um aplicativo de gerenciamento de usuários construído com Angular para o front-end e o JSON Server para criar uma API REST fake.

## Pré-requisitos

Antes de executar o aplicativo, você deve ter as seguintes dependências instaladas:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://cli.angular.io/)
- [JSON Server](https://github.com/typicode/json-server)

## Instalação e Execução

Siga estas etapas para executar o aplicativo:

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/user-management-app.git
   ```

2. Navegue até o diretório do projeto:

   

3. Instale as dependências do Angular:

   ```bash
   npm install
   ```

4. Inicie o JSON Server para simular uma API REST falsa (Certifique-se de está dentro da pasta correta):

   ```bash
   json-server --watch db.json
   ```

5. Inicie o aplicativo:

   ```bash
   ng serve
   ```

6. Abra o aplicativo em seu navegador:

   [http://localhost:4200/](http://localhost:4200/)

Agora você pode usar o aplicativo para gerenciar usuários.

## Recursos

- Adicionar um novo usuário com informações como nome, email, CPF, celular e tipo de contato.
- Editar os detalhes de um usuário existente.
- Excluir um usuário.
- Listar todos os usuários cadastrados.

