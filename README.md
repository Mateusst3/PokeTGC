# PokeTGC

Um simples gerenciador de Pokemons desenvolvido com a versão 17 Do Angular.

## Pré Requisitos

1. Instalar [Node.js](http://nodejs.org)

2. Clonar o repositório
    ```bash
      git clone https://github.com/Mateusst3/PokeTGC.git
    ```

3. Instalar as dependências
    ```bash
      npm install
    ```

4. Iniciar o servidor
   ```bash
      ng serve
    ```

## Api Utilizada

Foi utilizada a API Pokemon TCG para pegar os dados (https://pokemontcg.io/)

## Manipulação de decks por usuário e arquitetura

Para salvar os decks do usuário, foi utilizado o localStorage, onde foi salvo o Array de decks do usuário. A arquitetura utilizada foi baseada em componentes, assim aproveitando ao máximo a última versão do Angular.

## Funcionalidades

No gerenciador de pokemons, é possível Criar Decks, visualizar Decks, renomear Decks, excluir Decks, procurar cartas, favoritar cartas e diversas outras funções.
