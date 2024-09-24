# API Rest Champions League ⚽

## Descrição 📍

Uma API Rest com arquitetura organizada e implementações completas, configurações e distribuições bem balanceadas de códigos da maneira correta. Feita para a disponibilização dos clubes e jogadores da Champions League.

## Funcionalidades ⚙️

- **Listar os jogadores e clubes do campeonato e suas características:** Os clubes e principalmente os jogadores são organizados com infromações, categorizando e diferenciando-os.

- **Filtrar jogadores e clubes por id:** Os usuários podem realizar buscas específicas por id, tanto dos clubes quanto dos jogadores, facilitando o acesso às informações desejadas.

- **Inserir um novo jogador:** Os usuários podem inserir um novo jogador completo ao registro de jogadores.

- **Atualizar um jogador pelo id:** Os usuários podem atualizar a sessão de estatísticas de um jogador baseado no id do mesmo.

- **Deletar jogador pelo id:** Os usuários podem deletar completamente um jogador a partir do id do mesmo.

## Exemplo de Implementação 🔍

### Buscar um jogador pelo ID

- **Endpoint:** `GET api/players/1`
- **Descrição:** Retorna o jogador de id = 1.
- **Exemplo de resposta:**

```json
{
  "id": 1,
  "name": "Lionel Messi",
  "club": "Paris Saint-Germain",
  "nationality": "Argentina",
  "position": "Forward",
  "statistics": {
    "Overall": 93,
    "Pace": 85,
    "Shooting": 94,
    "Passing": 91,
    "Dribbling": 95,
    "Defending": 38,
    "Physical": 65
  }
}
```

## Tecnologias Utilizadas 📌

- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação utilizada para o desenvolvimento do projeto.
- **[Tsup](https://github.com/egoist/tsup):** Ferramenta de construção e empacotamento para projetos TypeScript.
- **[Tsx](https://github.com/egoist/tsx):** Compilador TypeScript que suporta a construção de projetos.
- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript que permite executar código JavaScript do lado do servidor.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Pacote de definições de tipos para Node.js para auxiliar no desenvolvimento com TypeScript.
- **[@types/express](https://www.npmjs.com/package/@types/express):** Pacote de definições de tipos para o framework Express.js, permitindo um desenvolvimento com tipagem estática.
- **[@types/cors](https://www.npmjs.com/package/@types/cors):** Pacote de definições de tipos para o middleware CORS utilizado no Express.
- **[Express](https://expressjs.com/):** Framework minimalista para Node.js que facilita a criação de servidores HTTP.
- **[CORS](https://www.npmjs.com/package/cors):** Middleware que permite ou bloqueia requisições de diferentes origens, configurando regras de Cross-Origin Resource Sharing.

## Como Utilizar 💻

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor executando `start:dev`.
4. Acesse os endpoints fornecidos para realizar operações com os jogadores ou clubes.