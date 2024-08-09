# Web_maintenance
# PRD - Sistema de Gerenciamento de Manutenção (VGGS)

# *Introdução & objetivo*

Uma aplicação web para gerenciar atividades de manutenção, visando a otimização dos processos, o aprimoramento da comunicação e a organização eficiente das operações internas da empresa. Esta plataforma centraliza todas as tarefas de manutenção, facilitando o acompanhamento de cada atividade, desde o cadastro e a atribuição de tarefas até o monitoramento e a finalização das manutenções. Com uma interface intuitiva e funcionalidades avançadas, a aplicação permite a gestão de recursos, controle de custos, registro detalhado de peças e materiais utilizados, além da geração de relatórios abrangentes que auxiliam na tomada de decisões estratégicas.

# *Por que* implementar isto?

Estamos desenvolvendo essa aplicação devido à complexidade e diversidade do parque de máquinas da empresa, onde a manutenção preventiva e corretiva é essencial para garantir a produtividade e a segurança dos colaboradores. O atual sistema manual de gerenciamento de manutenção tem gerado vários problemas. A falta de organização e controle dificulta o registro de todas as solicitações de manutenção, o monitoramento do status das manutenções e o controle dos custos envolvidos. Além disso, a comunicação ineficaz entre as equipes responsáveis torna difícil comunicar as solicitações de manutenção, acompanhar o progresso das manutenções e registrar as peças e materiais utilizados. A perda de tempo e produtividade é outro grande problema, pois há dificuldade em acessar informações relevantes sobre as máquinas e seus históricos de manutenção, resultando em atrasos e interrupções na produção. Essa aplicação tem como objetivo otimizar os processos, aprimorar a comunicação e organizar de forma eficiente as operações internas, resolvendo esses problemas e aumentando a eficiência operacional.

---

# ***Público alvo***

Nossa aplicação terá uma interface amigável e intuitiva que visa atingir um público diversificado dentro da empresa, incluindo:

1. **Usuários Leigos**: Pessoas com pouco ou nenhum conhecimento técnico, que necessitam de uma interface simples e direta para realizar suas tarefas sem dificuldades.
2. **Profissionais Não-Técnicos**: Profissionais de diversas áreas (administração, gerente de projeto, RH, etc.) que utilizam
3. **Novatos em Tecnologia**: Pessoas que estão começando a usar tecnologias digitais e preferem interfaces que não sejam complexas ou intimidadoras.

Desenvolver uma interface amigável e intuitiva irá ser crucial para garantir que a aplicação seja acessível e útil para o maior número de pessoas possível, independentemente de suas habilidades ou experiências anteriores com tecnologia.

Uma das prioridades relacionada ao publico alvo, seriam os usuários mais leigos, que realmente não necessitam do conhecimento técnico relacionado a aplicação, e por serem maior massa na empresa, irão ser cruciais para a utilização do projeto e boa funcionalidade na empresa como um todo.

| Perfil de usuário | Descrição, necessidades e interesses. |
| --- | --- |
| Operador de Máquinas | O operador de máquinas, necessita de uma interface simples e intuitiva para registrar solicitações de manutenção, facilidade para visualizar o status das manutenções e instruções claras para realizar ações dentro da aplicação. |
| Gerente de Manutenção | O gerente de manutenção precisa de um dashboard para acompanhar o status das solicitações de manutenção, ferramentas para gerar relatórios de custos e tempo de manutenção, e melhor comunicação com as equipes de manutenção. |
| Assistente de Recursos Humanos | A utilização requer uma interface limpa e organizada para registrar e acompanhar solicitações de manutenção, ferramentas para enviar notificações e atualizações sobre o status das manutenções, e acesso rápido a tutoriais e suporte para resolver dúvidas. |

# *Personas*

### Persona 1: Usuário Leigo

**Nome:** Maria da Silva

**Idade:** 45 anos

**Cargo:** Operadora de Máquinas

**Experiência:** 20 anos na indústria automotiva, sem conhecimento técnico em informática.

**Frustrações:**

- Dificuldade em entender sistemas complexos e encontrar as funções necessárias.
- Medo de cometer erros ao registrar solicitações de manutenção.
- Perda de tempo tentando encontrar informações sobre o status das manutenções.
- Falta de suporte adequado ao enfrentar problemas tecnológicos.

**Necessidades:**

- Uma interface que permita registrar solicitações de manutenção de forma rápida e intuitiva.
- Facilidade para visualizar o status das manutenções das máquinas que opera.
- Instruções passo a passo para cada ação dentro da aplicação.

**Motivações:**

- Manter as máquinas em funcionamento para evitar paradas na produção.
- Garantir a segurança de seu ambiente de trabalho.
- Sentir-se confiante ao usar a tecnologia sem precisar de ajuda constante.

…

### Persona 2: Profissional Não-Técnico

**Nome:** João Pereira

**Idade:** 38 anos

**Cargo:** Gerente de Projetos

**Experiência:** 10 anos na gestão de projetos de manutenção industrial.

**Frustrações:**

- Falta de visibilidade clara sobre o status e progresso das manutenções.
- Dificuldade em gerar relatórios precisos sobre custos e tempo de manutenção.
- Problemas de comunicação com as equipes de manutenção, resultando em atrasos.
- Falta de integração entre diferentes sistemas usados na empresa.

**Necessidades:**

- Um dashboard que permita acompanhar o status de todas as solicitações de manutenção.
- Ferramentas para gerar relatórios sobre custos, tempo e recursos utilizados.
- Capacidade de comunicar-se facilmente com as equipes de manutenção e registrar suas atividades.

**Motivações:**

- Otimizar os processos de manutenção para reduzir custos e aumentar a produtividade.
- Melhorar a comunicação entre as diferentes equipes envolvidas na manutenção.
- Garantir que todas as manutenções sejam realizadas dentro dos prazos estabelecidos.

### Persona 3: Novato em Tecnologia

**Nome:** Ana Costa

**Idade:** 25 anos

**Cargo:** Assistente de Recursos Humanos

**Experiência:** 1 ano na empresa, recém-graduada em Administração.

**Frustrações:**

- Sentir-se sobrecarregada por sistemas complexos e interfaces confusas.
- Falta de suporte e tutoriais acessíveis para aprender a usar novas ferramentas.
- Dificuldade em encontrar e compartilhar informações de manutenção com os colegas.
- Medo de fazer algo errado e causar problemas no sistema.

**Necessidades:**

- Uma interface limpa e organizada para registrar e acompanhar solicitações de manutenção.
- Ferramentas para enviar notificações e atualizações sobre o status das manutenções para os funcionários.
- Acesso rápido a tutoriais e suporte para resolver dúvidas rapidamente.

**Motivações:**

- Ajudar a melhorar a comunicação interna e a organização das atividades de manutenção.
- Aprender a utilizar ferramentas digitais de forma eficaz para crescer na carreira.
- Contribuir para um ambiente de trabalho mais seguro e eficiente.

---

# *Requisitos Funcionais*

1. **F1: Cadastro de Tarefas de Manutenção**
    - **Descrição:** Permitir o registro de novas solicitações de manutenção com informações detalhadas como descrição, prioridade, data de solicitação e máquina/equipamento associado.
    - **Critérios de Aceitação:**
        - O usuário pode registrar uma nova solicitação de manutenção preenchendo todos os campos obrigatórios.
        - A solicitação deve ser salva no sistema e estar visível na lista de manutenções pendentes.
    - **Prioridade:** **P1**
2. **F2: Atribuição de Tarefas**
    - **Descrição:** Facilitar a atribuição de tarefas de manutenção aos técnicos apropriados, permitindo a notificação dos técnicos designados sobre novas tarefas.
    - **Critérios de Aceitação:**
        - Um gerente pode visualizar a lista de solicitações de manutenção e atribuir uma tarefa a um técnico disponível.
        - O técnico designado recebe uma notificação com os detalhes da tarefa.
    - **Prioridade:** **P1**
3. **F3: Monitoramento de Manutenções**
    - **Descrição:** Fornecer uma visão em tempo real do status das manutenções, permitindo a atualização do progresso das tarefas pelos técnicos.
    - **Critérios de Aceitação:**
        - Técnicos podem atualizar o status das manutenções (ex: em andamento, concluído) em tempo real.
        - O sistema exibe o status atualizado e as informações de progresso na interface.
    - **Prioridade:** **P1**
4. **F4: Gestão de Recursos**
    - **Descrição:** Gerenciar o inventário de peças e materiais utilizados nas manutenções, registrando o uso de recursos e atualizando o inventário automaticamente.
    - **Critérios de Aceitação:**
        - O sistema permite registrar a utilização de peças e materiais em cada tarefa de manutenção.
        - O inventário é atualizado automaticamente conforme o uso registrado.
    - **Prioridade:** **P1**
    

**P1** = **Crítico | P1 = Importante | P2 = Bom ter**

### Casos de Uso

> Caso de uso 1: Givas, operador de máquinas, registra uma solicitação de manutenção quando identifica um problema em uma máquina. Ele preenche as informações necessárias no sistema e envia a solicitação, que é então atribuída a um técnico pelo gerente de manutenção.
> 

> Caso de uso 2: Gabriel, gerente de manutenção, acessa o sistema para monitorar todas as solicitações de manutenção pendentes. Ela atribui uma nova solicitação ao técnico Carlos Souza e verifica o progresso de outras tarefas em andamento.
> 

> Caso de uso 3: Vinicius, técnico de manutenção, recebe uma notificação sobre uma nova tarefa atribuída a ele. Ele inicia a manutenção, atualiza o status da tarefa e registra as peças utilizadas. Após concluir a manutenção, ele atualiza o sistema com detalhes sobre a solução aplicada e marca a tarefa como concluída.
> 

---

# Requisitos Não Funcionais

[Os requisitos não funcionais descrevem os critérios de desempenho, segurança, usabilidade e outras características que o sistema deve possuir. Eles garantem que o sistema funcione eficientemente sob diversas condições.]

1. **NF1: Desempenho**
    - **Descrição:** O sistema deve ser capaz de processar e responder a solicitações de manutenção de forma rápida e eficiente.
    - **Critérios de Aceitação:**
        - Tempo de resposta do sistema para operações críticas (registro de solicitações, atribuição de tarefas) não deve exceder 2 segundos.
        - Capacidade de suportar até 1000 usuários simultâneos sem degradação significativa do desempenho.
    - **Prioridade:** **P1**
2. **NF2: Segurança**
    - **Descrição:** O sistema deve garantir a segurança dos dados de manutenção e a proteção contra acessos não autorizados.
    - **Critérios de Aceitação:**
        - Implementação de autenticação de dois fatores (2FA) para todos os usuários.
        - Criptografia de dados em trânsito e em repouso.
        - Auditoria e registros de atividades de usuários para rastrear acessos e modificações.
    - **Prioridade:** **P1**
3. **NF3: Usabilidade**
    - **Descrição:** O sistema deve ser fácil de usar, com uma interface intuitiva que permita aos usuários realizarem suas tarefas sem dificuldades.
    - **Critérios de Aceitação:**
        - Interface gráfica amigável com navegação simples e clara.
        - Suporte a múltiplos dispositivos (desktop, tablets, smartphones) com design responsivo.
        - Treinamento e documentação abrangentes para todos os usuários.
    - **Prioridade:** **P1**
4. **NF4: Confiabilidade**
    - **Descrição:** O sistema deve ser altamente confiável, garantindo disponibilidade contínua e recuperação rápida em caso de falhas.
    - **Critérios de Aceitação:**
        - Disponibilidade do sistema de 99,9% (tempo de inatividade não superior a 8,76 horas por ano).
        - Mecanismos de backup e recuperação de desastres com RTO (Recovery Time Objective) de 1 hora e RPO (Recovery Point Objective) de 15 minutos.
    - **Prioridade:** **P1**

### 📊 Métricas

[Seja específico ao descrever os padrões ou métricas que devem ser atendidos. Inclua descrições detalhadas e, se possível, métricas mensuráveis.]

| Medida | Estado atual | Esperado | Resultados |
| --- | --- | --- | --- |
| Desempenho | 5s | 2s |  |
| Segurança | Login, Auth | 2FA, Login, Auth |  |
| Usabilidade | Computador | Computador, Mobile |  |

---

# *Fora de escopo*

<aside>
🚫 Liste todos os itens que estarão fora do escopo deste recurso do produto

</aside>

# *User Experience*

<aside>
🖍️ Crie links para seu arquivos de UX aqui: UX Flows, UI, etc.

</aside>

# *Dependências*

<aside>
⚠️ Quais necessidades que precisam ser supridas para que este produto/feature seja desenvolvido?

</aside>

# *Plano de lançamento*

*Crie uma lista de itens que precisão ser atendidos para o lançamento do produto no mercado, por exemplo:*

1. *Regras para lançamento interno:*
    - [ ]  *Validação*
    - [ ]  *Divulgação*

# 💌 *Plano de comunicação*

Quando as comunicações acontecerão? Quem será notificado sobre esse novo recurso? Enviaremos e-mails e notificações no aplicativo?
