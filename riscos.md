## Riscos e Mitigação ⚠️

Esta seção identifica os principais riscos que podem afetar o escopo, cronograma ou qualidade do projeto Sebo Digital, e define as estratégias para mitigar (reduzir ou eliminar) seu impacto.

| Risco | Descrição do Risco | Nível | Estratégia de Mitigação |
| :--- | :--- | :--- | :--- |
| **R1** | Atraso na integração com o gateway de pagamento. | **Alto** | Utilizar um gateway popular e bem documentado (ex: PagSeguro, Mercado Pago) e iniciar a integração na **Fase 2**, em paralelo com o desenvolvimento do carrinho. |
| **R2** | Erros de sincronização de estoque entre o sistema e o sebo físico. | **Médio** | Implementar um sistema de log de auditoria detalhado e notificações de estoque baixo (alerta ao ADM). |
| **R3** | Requisitos do Cliente mudam após o início do desenvolvimento. | **Médio** | Adotar metodologia ágil (**Scrum**), realizando entregas incrementais e revisões semanais para validação e alinhamento contínuo. |
| **R4** | Problemas de desempenho com grande volume de dados (10k+ livros). | **Alto** | Implementar **caching** de consultas de catálogo e otimizar índices no banco de dados. |