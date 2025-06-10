
## Relatório Técnico - Maxwell Venicio

### 1. Visão Geral da Solução

Este projeto trata da reestruturação e finalização de uma aplicação Angular para gerenciamento de tarefas. O repositório original apresentava diversos bugs que impediam seu funcionamento básico. O trabalho aqui realizado corrige os principais erros, implementa melhorias solicitadas pela equipe de QA e adiciona novas funcionalidades para tornar a aplicação estável, intuitiva e moderna.

---

### 2. Como Executar a Aplicação

Siga os passos abaixo:

```bash
git clone https://github.com/maxwellvenicio/teste-trainee-dev
cd teste-trainee-dev
npm install
npm start
```

---

### 3. Correção dos Erros Iniciais (npm start)

- Corrigido nome incorreto da classe `HeadeComponent` para `HeaderComponent`.
- Adicionada importação ausente do serviço `TodoService` no `NewTaskComponent`.
- Instalado o pacote `@fortawesome/angular-fontawesome`, que estava ausente.
- Adicionado o script `"start": "ng serve"` no `package.json`.

---

### 4. Relatório de Correção de Bugs

- **[✔] Duplicação de tarefas ao salvar:** chamada duplicada de `addTodo` foi removida.
- **[✔] Necessidade de atualizar a página para adicionar nova tarefa:** lógica de controle `count` foi eliminada.
- **[✔] Texto do botão “Limpar Todas as Tarefas” não estava em português:** label foi ajustado.
- **[✔] Botões “Exibir/Ocultar Tarefas Concluídas” com comportamento invertido:** lógica corrigida.
- **[✔] Exclusão de tarefas concluídas sem confirmação:** confirmação adicionada com `SweetAlert2`.
- **[✔] Remoção incorreta de tarefas não concluídas:** lógica corrigida para excluir apenas concluídas.
- **[ ] Botão “Editar” inoperante:** **não implementado** (ver seção 6).
- **[✔] Desalinhamento do botão “Editar”:** estilo ajustado via classe CSS.
- **[✔] Botão “Remover” estilizado com cor vermelha:** melhoria visual aplicada.
- **[✔] Falta de rolagem na lista de tarefas:** `overflow-y: auto` adicionado no CSS.
- **[✔] Tarefas em branco sendo adicionadas:** adicionada validação `trim()` no campo de entrada.

---

### 5. Relatório de Implementação de Melhorias

- **[✔] Ordenar tarefas de A a Z:** implementado método `sortTodosAZ`.
- **[✔] Adicionar tarefa via tecla Enter:** `(keyup.enter)="addTask()"` no campo de entrada.
- **[✔] Adicionar múltiplas tarefas separadas por `|`:** campo processa e cria múltiplas tarefas.
- **[✔] Filtro de palavras obscenas:** uso da biblioteca `bad-words` com adição de termos personalizados.
- **[✔] Exportar tarefas para PDF:** funcionalidade implementada com `jsPDF`.
- **[✔] Substituição de `alert` e `confirm`:** trocados por modais interativos com `SweetAlert2`.

---

### 6. Relatório de Débito Técnico

- ❌ **Botão “Editar” não funcional:** Não concluída a tempo.

---

### 7. Melhorias Futuras Sugeridas

- Implementar funcionalidade completa de **edição de tarefas**.
- Adicionar **autenticação de usuários** e **persistência em backend (Firebase ou REST API)**.
- Criar **filtros por status** (Todas, Pendentes, Concluídas).
- Implementar **notificações locais** para lembrar tarefas próximas.
- Criar **modo escuro** para melhorar a experiência visual.

---

### 🛠️ Tecnologias Utilizadas

- Angular
- TypeScript
- SweetAlert2
- jsPDF
- bad-words
- FontAwesome

---
### 8. Decisões e Considerações

- O uso da biblioteca `SweetAlert2` melhorou significativamente a experiência do usuário ao substituir alertas nativos.
- A modularização e clareza do código foram priorizadas em todas as implementações.
- O uso de `bad-words` foi estendido com palavras em português para melhor adequação cultural.

-Participar deste desafio foi uma excelente oportunidade de aprendizado e evolução prática. A atividade me permitiu aprofundar conhecimentos em Angular, boas práticas de UX, e soluções modernas de frontend. Corrigir uma base de código herdada foi especialmente enriquecedor, pois exigiu análise crítica, organização e tomada de decisões técnicas eficazes. Agradeço pela oportunidade.
