---
author: Matheus Laidler
pubDatetime: 2026-04-23T15:57:52.737Z
title: "Manual do Wintour para Agências de Viagem"
slug: manual-wintour
featured: false
#ogImage: https://avatars.githubusercontent.com/u/279110288?v=4&size=64
description: Domine o básico da ferramenta de BackOffice com este Manual.
tags: ['agente', 'turismo', 'backoffice', 'wintour']
---

>Consiga utilizar o sistema de BackOffice Wintour através desse manual

## Sumário

* [1. Criação de Usuário](#1-criação-de-usuário)
* [2. Criação de Emissores](#2-emissores)
    * [Padrão de Comissionamento](#definindo-padrões-de-comissionamento)
* [3. Cadastro de Clientes](#3-clientes)
    * [Prazos de Recebimento (Parametrizações)](#prazos-de-recebimento-clientes-corporativos)
    * [Descontos para Clientes](#descontos-para-clientes)
* [4. Cadastro de Fornecedores](#4-fornecedores)
    * [Regras de Faturamento (Parametrizações)](#regras-de-negócio-e-faturamento-parametrizações)
    * [Configurando o Calendário de Prazos](#configurando-o-calendário-de-prazos-ex-rextur-advance-e-brt)
    * [Configurando Prazos Padrões](#configurando-prazos-padrões-ex-bestbuy)
* [5. Criação de Vendas](#5-vendas)
    * [Importar Vendas (Integração)](#vendas-integradas-importação)
    * [Vendas Manuais](#vendas-manuais)
    * [Documentação para o Cliente](#documentação-pronta-e-manual)
* [6. Lembretes e Alertas](#6-lembretes)
* [7. Financeiro](#7-financeiro)
    * [Contas a Pagar e Receber](#contas-a-pagar-e-receber)
    * [Despesas da Agência](#lançamento-de-contas-fixas-despesas-da-agência)
    * [Abertura de Saldo & Movimento Bancário](#abertura-de-saldo--movimento-bancário)
* [8. Relatórios Gerais](#8-relatórios)
    * [Relatórios de Vendas (Gerencial)](#exemplos-úteis-de-relatórios-de-vendas)
    * [Relatórios Financeiros](#relatórios-financeiros)


---

## 1. Criação de Usuário

Para cadastrar novos acessos no sistema, siga o caminho abaixo:

* **Acesso:** Vá em **Outros > Senhas e Acessos > Configurações Gerais**.
  
    <img width="55%" height="317" alt="image" src="https://github.com/user-attachments/assets/7ba9c7e9-069b-4941-bcf5-0ebfbaa511b5" />

* **Novo Cadastro:** Clique em **Incluir [F3]** para criar o login do novo usuário. 
  
    <img width="50%" alt="image" src="https://github.com/user-attachments/assets/34343ff1-a601-46e4-b726-c951077ef951" />

    Após criar usuário e clicar em salvar, uma janela com opção de tirar todas as permissões, deixar todas as permissões selecionadas ou clonar uma configuração de permissão de outro usuário já configurado irá aparecer. Basta escolher e salvar.

* **Permissões:** Configure os acessos por filial e ajuste as permissões conforme o cargo.

  <img width="462" alt="image" src="https://github.com/user-attachments/assets/d7f6e1eb-f444-4031-92bd-85371d27a704" />
  
  Após criar o usuário, precisa configurar corretamente as permissões do usuário de forma individual. Ao clicar para configurar por filial, terá todas as permissões para configurar. O 'Assistente' abrirá a mesma janela de opções sobre selecionar tudo, desmarcar tudo ou clonar de outro usuário.
  
  <img width="462" alt="image" src="https://github.com/user-attachments/assets/641d5ebf-e9ac-4197-abf8-1ca933969768" />
  

> **Nota:** O número de usuários no sistema é ilimitado, mas a quantidade de máquinas conectadas depende do plano contratado.

---

## 2. Emissores

Nesta seção, cadastraremos os emissores da agência (agentes de viagens, vendedores, etc.).

* **Acesso:** Vá em **Cadastros > Parametrização > Emissores/Promotores/Gerentes > Emissores**.
  
  <img width="45%" alt="image" src="https://github.com/user-attachments/assets/fe712900-b46e-47fe-b74b-c5dee850b282" />

* **Emissor Padrão de Interfaces:** Serve para a importação de vendas. Caso a consolidadora/operadora envie o nome do próprio funcionário deles em vez do seu emissor, o sistema fará o relacionamento automático usando este cadastro padrão.

### Criando um Novo Emissor:

1.  Clique em **Incluir [F3]**.

    <img width="55%" alt="image" src="https://github.com/user-attachments/assets/ead3269a-a3ae-488b-82de-622f6a260a06" />
   
2.  **Prazos a Pagar:** Para emissores comissionados com data fixa de pagamento, configure este campo. Por exemplo, o código `05MS` programa o pagamento para o dia 5 de cada mês (use o ícone de lupa para consultar outros códigos).

3.  **Configurar Comissionamento:** Defina se o comissionamento será para Vendedor (emitiu a venda), Promotor (trouxe o cliente) ou Gerente (gestão de equipe). É possível acumular essas funções.

    <img width="50%" alt="image" src="https://github.com/user-attachments/assets/7b49e78c-7d08-49ff-8e10-297005947e0b" />

### Definindo Padrões de Comissionamento:

Na tabela do emissor, clique no botão **(+)** para aplicar uma regra existente ou crie uma nova (principalmente caso seja a primeira vez)

   <img width="50%" alt="image" src="https://github.com/user-attachments/assets/5462cf93-544a-48ac-b080-0327ad10acc3" />
   
1.  Clique em **Definir/Alterar padrões de comissionamento** > **Insere novo padrão**.

    <img width="40%" alt="image" src="https://github.com/user-attachments/assets/f8a73ee1-c703-47c5-906d-d001f0d3c4af" />

2.  **Filtros:** Especifique o padrão por produto (passagem, hotel, etc.), fornecedor, cliente ou companhia aérea. Se deixar em branco, a regra valerá para tudo.

    <img width="40%" alt="image" src="https://github.com/user-attachments/assets/bdd6d264-7e24-4ab4-a1e5-e719718bbd7f" />


3.  **Base de Cálculo:** Insira o percentual e a base de incidência (geralmente a opção `45 - Líquido Agência`). O sistema também aceita valores fixos ou fórmulas especiais.

    <img width="55%" alt="image" src="https://github.com/user-attachments/assets/dc004c13-fe94-4ed5-a7c5-51d324a78845" />

4. **Salvar**: Salve essa configuração e agora poderá clicar em **(+)** no campo de emissores e selecionar o padrão de comissão que criamos agora

5.  **Clonar Configuração:** Para não repetir o processo em todos os funcionários, clique em **Clonar Configuração** no menu superior, selecione o emissor de origem, os emissores de destino e confirme clicando no botão central.

    <img width="55%" alt="image" src="https://github.com/user-attachments/assets/3ee15124-6ca7-4c00-ac4f-c193cdd79c9f" />

---

## 3. Clientes

* **Acesso:** Vá em **Cadastros > Clientes**. 

  <img width="45%" alt="image" src="https://github.com/user-attachments/assets/ae2eca67-a1f2-48b1-b530-44794b613cd6" />

  *(Dica: Use a tecla **[F8]** para localizar e digite `*` para listar todos os cadastrados).*

### Cliente Padrão de Interfaces:
Este é um cadastro transitório do Wintour. Ao importar uma venda, ela será atrelada a este cliente temporário, exigindo que você a vincule manualmente ao cliente real (físico ou corporativo) posteriormente na aba `Vendas`.

   <img width="40%" alt="image" src="https://github.com/user-attachments/assets/5da05ee2-6323-427e-bf07-f0fa59bc165c" />

### Cadastrando um Cliente:
1.  Clique em **Incluir [F3]** (Pessoa Física ou Jurídica).
2.  Preencha o formulário e clique em **Salvar [F6]**. Os campos inferiores, como Cartão de Crédito e Dependentes, só poderão ser preenchidos após este primeiro *save*.
3.  **Dependentes:** Utilize esta aba para unificar faturamentos. Se houver apenas um pagador, cadastre os viajantes (cônjuge, filhos) como dependentes. Se houver pagadores distintos, crie clientes separados.

    <img width="50%" alt="image" src="https://github.com/user-attachments/assets/9abbe719-81e0-4a18-8faa-06f1fc692ac3" />

### Prazos de Recebimento (Clientes Corporativos):
Se a agência envia faturas semanais (ou em períodos específicos) para empresas, configure a regra de faturamento:

   <img width="50%" alt="image" src="https://github.com/user-attachments/assets/b04ec75d-8de4-4102-84fd-24b04f7a37ea" />

* Vá em **Parametrização > Prazos Recebimentos Clientes > Incluir**.
* Crie um código, como `03FS` (3 dias fora da semana). Se quiser a cada 10 dias, pode usar `10FD`.
* Defina se o prazo conta a partir da emissão, do início ou do final dos serviços.
* **Suporte Wintour:** Caso tenha dúvidas sobre como estruturar os códigos de prazo, você pode acionar o suporte através do WhatsApp: `+55 24 98128-5315`.
  
    <img width="55%" alt="image" src="https://github.com/user-attachments/assets/dd6814d3-5594-4a9e-a5c0-1316fa83747c" />

### Descontos para Clientes:
Para configurar descontos automáticos (ex: x% de desconto para todas as emissões de um cliente corporativo):
* Vá em **Parametrização > Descontos Clientes > Incluir**.
* Defina o percentual e a base de cálculo (tarifa, comissão, over, taxa RAV, fee, etc.).

    <img width="50%" alt="image" src="https://github.com/user-attachments/assets/268a6cdb-1343-4057-8303-1fcc823dbb35" />

---

## 4. Fornecedores

Muitas vezes, não é necessário preencher o cadastro completo de um fornecedor, bastando o nome e o código IATA (para cias aéreas).

* **Acesso:** Vá em **Cadastros > Fornecedores > Incluir** ou **Localizar [F8]**.

  <img width="50%" alt="image" src="https://github.com/user-attachments/assets/d1fed200-8cce-4ff3-9532-52dfd0b760af" />

> **Dica:** Nesta mesma aba sobre cadastro de Fornecedores, você também já pode cadastrar as empresas que prestam serviços para a agência (provedores de internet, aluguel, etc.) para uso futuro no financeiro.

### Regras de Negócio e Faturamento (Parametrizações):
Esta é a parte mais importante. O fornecedor deve repassar o calendário de pagamentos e a regra de comissionamento. Como as vendas integradas já importam a comissão automaticamente, o foco principal é configurar os **prazos de vencimento**.

### Configurando o Calendário de Prazos (Ex: Rextur Advance e BRT):

<img width="50%" alt="image" src="https://github.com/user-attachments/assets/bacd2bc2-ecbc-47ed-8848-53a46bb037f0" />

Se o fornecedor envia um calendário semestral de pagamentos:


1.  Vá em **Cadastros > Parametrização > Diversos > Calendário de Prazos > Incluir**.

    <img width="55%" alt="image" src="https://github.com/user-attachments/assets/8a52d34d-454d-47b7-86b4-0660d65880dc" />

2.  Crie uma sigla (ex: `RE` para Rextur).
3.  Cadastre os períodos: Início (01/04) - Fim (08/04) - Vencimento (14/04) [...]. Salve.

    <img width="55%" alt="image" src="https://github.com/user-attachments/assets/f5815c2a-b549-493b-a8cf-f91bcfe3f76a" />

4.  Volte na aba aberta de cadastro do fornecedor > **Parametrizações > Prazos pagamento fornecedores > Incluir**.
5.  Insira o código `CL` (Calendário) + a sigla criada (`RE`) = `CLRE`.
  
    <img width="55%" alt="image" src="https://github.com/user-attachments/assets/88302695-bf4f-4790-9c8f-d60a0dde2671" />


> O calendário da [CVC Corp/Rextur Advance](https://www.rexturadvance.com.br/calendario-de-faturamento/) e da [BRT](https://news.grupobrt.com.br/pagina/grupo-brt/calendario-de-faturamento-aereo-brt-2026/63/) de 2026 que recebemos é onde tem todo o calendário específico que precisamos copiar dentro do Wintour.


### Configurando Prazos Padrões (Ex: BestBuy):
Se o fornecedor tem um prazo fixo (ex: 4 dias após a emissão/check-in), o processo é mais simples:
1.  Vá em **Parametrização > Prazos Pagamentos > Incluir**.
2.  **Cód. Prazo:** `04FS` (4 dias fora da semana).
3.  **Conta a partir de:** `6 - Data início dos serviços` (Check-in). Salve.

    <img width="50%" alt="image" src="https://github.com/user-attachments/assets/03bc397f-a666-4e1a-834c-c415648f7195" />


---

## 5. Vendas

### Vendas Integradas (Importação):
1.  Vá em **Atendimentos/Vendas > Interfaces**.
2.  Selecione o fornecedor e clique na estrela para favoritar. Agora clique em cima do fornecedor e depois em **Importar vendas**.

    <img width="50%" alt="image" src="https://github.com/user-attachments/assets/8457185d-7465-415d-8816-0fcdcc23d580" />

3.  Insira as credenciais (clique no ícone de chave para salvá-las e automatizar os próximos acessos), datas e produtos.

    <img width="50%" alt="image" src="https://github.com/user-attachments/assets/1fad11d5-877e-436c-836b-45510ac2323f" />

    > Alguns sistemas pedirão para especificar o tipo de fornecedor e a API:
    > * **Operadora:** Focada em montagem de pacotes prontos para revenda.
    > * **Consolidadora:** Empresa que agrega várias cias aéreas para você não precisar comprar direto com a LATAM, Azul, etc.
    > * **Exemplo BRT:** Para importar as vendas, escolha a opção `Consolidadora` e `API Sales` para então inserir as credenciais.

4.  Preencha de qual dia vai importar as vendas e de quais produtos. Após isso, clique em **Importar**.

     <img width="50%" alt="image" src="https://github.com/user-attachments/assets/34f9315a-d08f-4b43-9fda-a3f4fec7054a" />

### Resolução de Problemas na Importação:
* 🔴 **Ícone Vermelho (Erro):** Falta vincular um emissor, cadastrar uma cia aérea ou configurar câmbio. Clique na venda com erro e verifique a mensagem em vermelho no rodapé para corrigir.
   > *Se cadastrar um novo emissor nesta etapa, lembre-se de configurar a comissão dele no menu Cadastros. Depois, abra a venda importada, aperte **[F5]** e **[F6]** para que o sistema recalcule a comissão corretamente.*
* 🟡 **Ícone Amarelo (Observação):** Exige atenção manual. Exemplos comuns:
    * **Cliente Padrão:** A venda caiu no cliente genérico de interface e precisará ser atrelada ao cliente real.
    * **Emissor Padrão:** O emissor da agência foi vinculado incorretamente ao padrão de interfaces.
* **Importar as vendas:** Após resolver os erros e conferir os alertas amarelos, clique em **Lançar Bilhetes** para finalizar a importação.
* **Dica de Conferência:** Abra a aba `Atendimento/Vendas > Vendas` para visualizar a última venda importada. Confira se a data de Vencimento do fornecedor está de acordo com o calendário que você configurou (Ex: Venda emitida dia 13/04 com vencimento automático para 22/04).

   <img width="55%" alt="image" src="https://github.com/user-attachments/assets/1e05ef8b-c096-40a2-8d81-a16cf77837fb" />

* **Corrigindo o vínculo do Emissor Padrão (caso específico):** Se um emissor da sua agência ficou vinculado ao padrão de interfaces, volte na tela de importação / interface do fornecedor, clique em **Relacionamentos** (ao lado de Configurações) > **Emissores**. Localize o emissor na lista e delete o vínculo errado.

### Ajuste de Over da Agência:
Se a taxa "Over" não estiver sendo importada, vá na interface do fornecedor > **Configurações (ícone de lápis)** > **Over agência** e selecione a opção `1 - Prevalece sempre o que vier na interface`. Se der tela de ERRO pedindo para atualizar, vá em **Outros > Atualizar Versão**.

### Vendas Manuais
* Para vendas manuais, preencha os dados em **Atendimentos/Vendas > Vendas > Incluir [F3]**. Basta preencher todos os dados de forma fiel à venda real. Campos de cálculo como comissão podem ser gerados sozinhos ao salvar, se você já configurou as regras. Caso contrário, preencha manualmente.
  
  <img width="55%" alt="image" src="https://github.com/user-attachments/assets/5e6d619b-6e60-48e0-a1da-fd06229dd043" />

### Documentação Pronta e Manual
* **Recibos:** Na aba da venda, clique em **Resumo** para gerar documentações como notas e recibos para vendas fechadas. 
* **Voucher:** Na aba de venda, clique em **Voucher** para gerar a documentação para seu cliente (o modelo será relacionado ao tipo de produto vendido).
* Para emissões avulsas (ex: a venda ainda não está fechada, ou precisa recriar um voucher rapidamente), vá em **Atendimentos/Vendas > Utilitários > Recibos / Voucher / Fatura (Série B)**. Preencha manualmente os dados e gere a documentação.

  <img width="55%" alt="image" src="https://github.com/user-attachments/assets/19b43b8e-22e4-468f-a8f1-5cb427f86f80" />

---

## 6. Lembretes

A tela inicial do sistema (ou **Outros > Lembretes**) funciona como uma central de notificações operacionais (embarques, check-in, etc.).

* **Configurações:** Em **Opções > Configurações**, você pode marcar/desmarcar o tipo de aviso que deseja receber e definir a antecedência dos alertas (ex: lembrar do check-in X dias antes).

  <img width="45%" alt="image" src="https://github.com/user-attachments/assets/9dbbffd3-4f65-471b-b8a5-9d40aca63bf3" />
  
* **Lembretes Manuais:** Além dos lembretes automáticos, você pode criar lembretes manuais diretamente na tela inicial ou dentro da própria página de uma venda, caso o aviso seja específico para aquele atendimento.
* **Relatórios Rápidos:** Ao clicar em um lembrete automático (ex: "Há 22 embarques em 15/04"), o sistema gera e abre na tela um relatório analítico completo daquela situação, organizando os dados por cliente, passageiro, bilhete, localizador, status da venda, conexões e horários exatos dos voos. A partir dessa lista, você pode até mesmo clicar para abrir a venda relacionada.

  <img width="55%"  alt="image" src="https://github.com/user-attachments/assets/9c2e4495-f107-456a-b579-80648d7ccc85" />

---

## 7. Financeiro

### Contas a Pagar e Receber

   <img width="55%" alt="image" src="https://github.com/user-attachments/assets/5d184239-7bac-4371-a2e5-05647f47bd78" />

* Acesse **Financeiro > Financeiro > A Pagar/Receber**. Selecione o período e o tipo de conta (A Pagar ou A Receber) > OK.
* Aparecerá uma planilha com as contas e seus respectivos fornecedores.
* Ao clicar em um fornecedor na planilha, uma janela abrirá com opções operacionais. Nela, você encontra as opções **"Detalhar valores para liquidação"** (versão simples ou completa), que geram relatórios focados nas contas a pagar atreladas às vendas daquele fornecedor específico, ideais para conferência antes do pagamento.

  <img width="55%" alt="image" src="https://github.com/user-attachments/assets/7787da25-8819-40ca-9fb0-f4c8512af111" />

### Lançamento de Contas da Agência (Fixas e Avulsas)
Para contas da própria agência (água, luz, internet, aluguel), utilize os botões superiores:
* **Lançar:** Para lançamentos de contas únicas/avulsas.
* **Mensais Fixas:** Para gastos recorrentes.

**Passo a passo para Mensais Fixas:**
1.  Clique em **Mensais Fixas > Adicionar Mensalidade Fixa**.
2.  **Credor:** Selecione o fornecedor (ex: Claro NET). Você pode buscá-lo pela lupa ou cadastrar um novo.
3.  **Referente a:** Defina a categoria da despesa (ex: provedor de internet).
4.  Preencha o valor e os dias de vencimento.
5.  **Mês de Competência:** Define a qual mês o pagamento se refere.
    * *Anterior ao vencimento:* Comum para a maioria dos boletos (ex: fatura vence dia 5, mas refere-se ao uso do mês anterior).
    * *Do Vencimento:* Contas cobradas e pagas dentro do próprio mês.
    * *Posterior ao Vencimento:* Pagamentos antecipados (ex: paga dia 30 para usar no mês seguinte).
6.  Marque os meses correspondentes (geralmente todos para contas anuais) para automatizar os lançamentos e salve. O primeiro vencimento deve refletir o primeiro boleto a ser pago.

    <img width="50%" alt="image" src="https://github.com/user-attachments/assets/407b0c04-c976-4dc9-9086-e605630ff720" />

### Abertura de Saldo, Liquidação e Movimento Bancário
Para que os relatórios de fluxo de caixa e o saldo bancário batam perfeitamente dentro do Wintour, é preciso seguir um fluxo contínuo.

**1. Abertura de Saldo (Feito apenas uma vez por conta):**
* Vá em **Opções > Saldo de Contas > Abertura de Saldo**.
* Selecione o banco, a data atual, insira o saldo real que está na conta e salve. A partir daqui, o Wintour passará a rastrear as entradas e saídas.

  <img width="50%" alt="image" src="https://github.com/user-attachments/assets/bfd92f6b-67f6-4fa5-b237-1493aee75253" />

**2. O Fluxo de Liquidação (A Pagar -> Movimento):**
* Quando uma conta for efetivamente paga, volte na tela **A Pagar/Receber**.
* Selecione a conta em questão e clique em **Liquidar Selecionados**.
* Uma tela pedirá para você escolher o **Banco da agência** (de onde o dinheiro saiu) e a **Data de pagamento**. Salve.
* **Resultado:** A conta *sai* da aba "A Pagar/Receber" e é automaticamente transferida para a aba **Movimento**, debitando o valor do saldo real daquele banco selecionado.

---

## 8. Relatórios

Acesse **Relatórios gerenciais > Mapa de Produção** para extrair métricas de vendas através de diversos filtros.

### Relatórios de Vendas e Produção
*(Configuração base: Selecione um Período "X a Y" > Vendas)*

  <img width="50%" alt="image" src="https://github.com/user-attachments/assets/ff2e8cb5-2ae5-4ca9-a7ba-2bd84d75b956" />
  
* **Visão Geral da Agência:** Tipo de relatório: `Agência (Sintética)`.
* **Histórico de Compras por Cliente:** Tipo de relatório: `Clientes (Analítico)` > `Analítico Simples` > Ordenado por: `Pax`. *(Nota: Não exibe comissão, emissor ou dados sensíveis, sendo ideal para exportar e enviar diretamente ao cliente).*
* **Vendas Agrupadas por Cia Aérea:** Tipo de relatório: `Clientes (Sintético)` > `Analítico Simples` > Agrupado por: `1 - Cia Aérea/Operadora`.
* **Vendas Agrupadas por Passageiro:** Tipo de relatório: `Clientes (Sintético)` > `Analítico Simples` > Agrupado por: `17 - Nome do Pax`.
* **Filtros Adicionais:** Nas caixas inferiores, você pode restringir o relatório por produto específico, emissor, fornecedor, etc.

  <img width="55%" alt="image" src="https://github.com/user-attachments/assets/77a2d004-017d-4ce6-ab78-34d397c8072a" />

**Outras Visões de Relatório no Mapa de Produção:**
* **Gráficos:** No menu superior "Gráficos", é possível gerar representações visuais (em Pizza ou Barra) dos dados filtrados para apresentações gerenciais.
* **Estat. de Aéreo:** Aba focada especificamente no volume de voos e trechos emitidos.

### Relatórios Financeiros (Gerenciais)
Esses relatórios dependem de um sistema bem alimentado com contas lançadas e vendas integradas. Acesse em: **Financeiro > Financeiro > Resumos > Selecionar o período**.

* **Posição Financeira:** É o relatório mais completo do sistema. Apresenta dados separados por produtos, mostrando colunas de tarifas, taxas, comissão, incentivos, RAV e o **lucro bruto das vendas**. Também engloba reembolsos, receitas diversas, despesas administrativas e a previsão de contas a pagar/receber num horizonte de 30 dias.
* **Fluxo de Caixa:** Demonstra a saúde momentânea da agência. Lista cada conta bancária cadastrada, seu saldo atual e cruza isso com as previsões de pagamento, alertando se o recurso atual será suficiente para honrar os compromissos futuros.
* **Balancete:** Relatório organizado por tipo de conta contábil. É extremamente útil para exportar e enviar à contabilidade da agência, embora seja menos usado no dia a dia operacional.
* **Receitas/Despesas (Visão Anual):** Selecione os filtros adequados (Receitas e Despesas). Ele gera um comparativo mês a mês, acompanhado de gráficos, que responde à pergunta central do negócio: *A receita gerada no mês foi suficiente para cobrir os custos de operação da agência?*

  <img width="45%" alt="image" src="https://github.com/user-attachments/assets/3280e743-212f-48dd-9a50-5a8fa3d97f46" />


  
