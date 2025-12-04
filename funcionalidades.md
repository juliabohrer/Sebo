##  Principais Recursos e Funcionalidades

### 1. Requisitos Funcionais

Estes requisitos descrevem as ações específicas que o sistema **deve executar** para atender às necessidades do Sebo Digital.

| ID | Requisito Funcional | Perfil Principal | CRUD Envolvido |
| :--- | :--- | :--- | :--- |
| **RF-1** | O sistema deve permitir o cadastro de livros, incluindo título, autor, editora, ano, gênero e estado de conservação. | ADM | Create/Update |
| **RF-2** | O sistema deve possibilitar o cadastro de clientes com nome, e-mail, telefone e CPF. | ADM | Create/Update |
| **RF-3** | O sistema deve registrar empréstimos e devoluções de livros, com data de retirada e devolução. | ADM | Create/Read |
| **RF-4** | O sistema deve permitir consulta de disponibilidade de um livro no acervo. | UC / ADM | Read |
| **RF-5** | O sistema deve permitir o cadastro de vendas (no caso de sebo). | ADM | Create/Read |
| **RF-6** | O sistema deve gerar relatórios de empréstimos, devoluções e vendas. | ADM | Read |
| **RF-7** | O sistema deve permitir a pesquisa por título, autor ou gênero. | UC / ADM | Read |
| **RF-8** | O sistema deve bloquear empréstimos a clientes com pendências (livros não devolvidos). | ADM | Read |
| **RF-9** | O sistema deve permitir que o administrador cadastre, edite e remova livros e usuários. | ADM | CRUD |
| **RF-10** | O sistema deve registrar o histórico de movimentação de cada livro. | ADM | Read/Create |

---

### 2. Requisitos Não Funcionais

Estes requisitos descrevem como o sistema **deve funcionar** (qualidade, desempenho e restrições) para garantir uma boa experiência de uso.

| ID | Requisito Não Funcional | Categoria |
| :--- | :--- | :--- |
| **RNF-1** | O sistema deve ser acessível via navegador web. | Acessibilidade |
| **RNF-2** | O tempo de resposta de qualquer operação deve ser inferior a 3 segundos. | Desempenho |
| **RNF-3** | O sistema deve armazenar dados em um banco de dados relacional (ex: MySQL). | Tecnologia/Restrição |
| **RNF-4** | O sistema deve permitir o acesso simultâneo de múltiplos usuários. | Capacidade |
| **RNF-5** | O sistema deve ter interface intuitiva e responsiva. | Usabilidade |
| **RNF-6** | O sistema deve proteger dados pessoais. | Segurança/Privacidade |
| **RNF-7** | O sistema deve ter backup automático diário. | Confiabilidade/Operação |
| **RNF-8** | O sistema deve permitir login com autenticação por senha. | Segurança |
| **RNF-9** | O sistema deve estar disponível 99% do tempo. | Disponibilidade |
| **RNF-10** | O sistema deve registrar logs de acesso e alterações. | Rastreabilidade/Segurança |