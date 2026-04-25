---
author: Matheus Laidler
pubDatetime: 2026-04-23T15:57:52.737Z
title: "Manual do Wintour para Agências de Viagem"
slug: manual-wintour
featured: false
ogImage: https://avatars.githubusercontent.com/u/279110288?v=4&size=64
description: Domine o básico da ferramenta de BackOffice com este Manual.
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
* **Novo Cadastro:** Clique em **Incluir [F3]** para criar o login do novo usuário.
* **Permissões:** Configure os acessos por filial e ajuste as permissões conforme o cargo.

> **Nota:** O número de usuários no sistema é ilimitado, mas a quantidade de máquinas conectadas depende do plano contratado.

---

## 2. Emissores

Nesta seção, cadastraremos os emissores da agência (agentes de viagens, vendedores, etc.).

* **Acesso:** Vá em **Cadastros > Parametrização > Emissores/Promotores/Gerentes > Emissores**.
* **Emissor Padrão de Interfaces:** Serve para a importação de vendas. Caso a consolidadora/operadora envie o nome do próprio funcionário deles em vez do seu emissor, o sistema fará o relacionamento automático usando este cadastro padrão.

### Criando um Novo Emissor:
1.  Clique em **Incluir [F3]**.
2.  **Prazos a Pagar:** Para emissores comissionados com data fixa de pagamento, configure este campo. Por exemplo, o código `05MS` programa o pagamento para o dia 5 de cada mês (use o ícone de lupa para consultar outros códigos).
3.  **Configurar Comissionamento:** Defina se o comissionamento será para Vendedor (emitiu a venda), Promotor (trouxe o cliente) ou Gerente (gestão de equipe). É possível acumular essas funções.

### Definindo Padrões de Comissionamento:
Na tabela do emissor, clique no botão **(+)** para aplicar uma regra existente ou crie uma nova:
1.  Clique em **Definir/Alterar padrões de comissionamento** > **Insere novo padrão**.
2.  **Filtros:** Especifique o padrão por produto (passagem, hotel, etc.), fornecedor, cliente ou companhia aérea. Se deixar em branco, a regra valerá para tudo.
3.  **Base de Cálculo:** Insira o percentual e a base de incidência (geralmente a opção `45 - Líquido Agência`). O sistema também aceita valores fixos ou fórmulas especiais.
4.  **Clonar Configuração:** Para não repetir o processo em todos os funcionários, clique em **Clonar Configuração**, selecione o emissor de origem, os emissores de destino e confirme clicando no botão central.

---

## 3. Clientes

* **Acesso:** Vá em **Cadastros > Clientes**. *(Dica: Use a tecla **[F8]** para localizar e digite `*` para listar todos os cadastrados).*

### Cliente Padrão de Interfaces:
Este é um cadastro transitório do Wintour. Ao importar uma venda, ela será atrelada a este cliente temporário, exigindo que você a vincule manualmente ao cliente real (físico ou corporativo) posteriormente.

### Cadastrando um Cliente:
1.  Clique em **Incluir [F3]** (Pessoa Física ou Jurídica).
2.  Preencha o formulário completo e clique em **Salvar [F6]**.
3.  **Dependentes:** Utilize esta aba para unificar faturamentos. Se houver apenas um pagador, cadastre os viajantes (cônjuge, filhos) como dependentes. Se houver pagadores distintos, crie clientes separados.

### Prazos de Recebimento (Clientes Corporativos):
Se a agência envia faturas semanais para empresas, configure a regra de faturamento:
* Vá em **Parametrização > Prazos Recebimentos Clientes > Incluir**.
* Crie um código, como `03FS` (3 dias fora da semana).
* Defina se o prazo conta a partir da emissão, do início ou do final dos serviços.

### Descontos para Clientes:
Para configurar descontos automáticos (ex: x% de desconto para todas as emissões de um cliente corporativo):
* Vá em **Parametrização > Descontos Clientes > Incluir**.
* Defina o percentual e a base de cálculo (tarifa, comissão, over, taxa RAV, fee, etc.).

---

## 4. Fornecedores

Muitas vezes, não é necessário preencher o cadastro completo de um fornecedor, bastando o nome e o código IATA (para cias aéreas).

* **Acesso:** Vá em **Cadastros > Fornecedores > Incluir** ou **Localizar [F8]**.

### Regras de Negócio e Faturamento (Parametrizações):
Esta é a parte mais importante. O fornecedor deve repassar o calendário de pagamentos e a regra de comissionamento. Como as vendas integradas já importam a comissão automaticamente, o foco principal é configurar os **prazos de vencimento**.

### Configurando o Calendário de Prazos (Ex: Rextur Advance e BRT):
Se o fornecedor envia um calendário semestral de pagamentos:
1.  Vá em **Cadastros > Parametrização > Diversos > Calendário de Prazos > Incluir**.
2.  Crie uma sigla (ex: `RE` para Rextur).
3.  Cadastre os períodos: Início (01/04) - Fim (08/04) - Vencimento (14/04) [...]. Salve.
4.  Volte ao cadastro do fornecedor > **Parametrizações > Prazos pagamento fornecedores > Incluir**.
5.  Insira o código `CL` (Calendário) + a sigla criada (`RE`) = `CLRE`.

O calendário da [CVC Corp/Rextur Advance](https://www.rexturadvance.com.br/calendario-de-faturamento/) e da [BRT](https://news.grupobrt.com.br/pagina/grupo-brt/calendario-de-faturamento-aereo-brt-2026/63/) de 2026 que recebemos em link tem todo o calendário específico deles, que copiaremos dentro do wintour.

### Configurando Prazos Padrões (Ex: BestBuy):
Se o fornecedor tem um prazo fixo (ex: 4 dias após a emissão/check-in), o processo é mais simples:
1.  Vá em **Parametrização > Prazos Pagamentos > Incluir**.
2.  **Cód. Prazo:** `04FS` (4 dias fora da semana).
3.  **Conta a partir de:** `6 - Data início dos serviços` (Check-in). Salve.

> **Nota:** Nesta mesma aba, você também pode cadastrar as empresas que prestam serviços para a agência (provedores de internet, aluguel, etc.) para uso futuro no financeiro.

---

## 5. Vendas

### Vendas Integradas (Importação):
1.  Vá em **Atendimentos/Vendas > Interfaces**.
2.  Selecione o fornecedor *(Dica: clique na estrela para favoritar)* e clique em **Importar vendas**.
3.  Insira as credenciais (clique no ícone de chave para salvá-las e automatizar os próximos acessos), datas e produtos.
4.  Selecione o tipo de fornecedor (Operadora = pacotes prontos; Consolidadora = emissão de bilhetes aéreos).

### Resolução de Problemas na Importação:
* 🔴 **Ícone Vermelho (Erro):** Falta vincular um emissor, cadastrar uma cia aérea ou configurar câmbio. Clique na venda com erro e verifique a mensagem em vermelho no rodapé para corrigir. *(Atenção: Se cadastrar um novo emissor nesta etapa, lembre-se de configurar a comissão dele. Depois, abra a venda, aperte **[F5]** e **[F6]** para recalcular a comissão).*
* 🟡 **Ícone Amarelo (Observação):** Exige atenção manual, como alterar o Cliente Padrão de Interface para o cliente real.
* **Importar as vendas**: Após resolver as problemáticas e visualizar os avisos/observações, pode clicar em **Lançar Bilhetes** para importar as vendas. Caso as vendas forem importadas como Cliente Padrão de Interface de forma transitória, vá até a aba de Venda e atribua o cliente real desta Venda. Podendo criar pela *lupa* em Clientes *>* *Cadastrar Novo* ou procurar o cliente se já cadastrado.

### Ajuste de Over da Agência:
Se a taxa "Over" não estiver sendo importada, vá na interface do fornecedor > **Configurações (ícone de lápis)** > **Over agência** e selecione a opção `1 - Prevalece sempre o que vier na interface`. Se der tela de ERROR pedindo atualizar, basta ir em **Outros** > **Atualizar Versão**.

### Vendas Manuais
* Para vendas manuais, preencha os dados em **Atendimentos/Vendas > Vendas > Incluir [F3]**. Basta preencher todos os dados de forma fiel a venda real. Campos de calculo como comissão podem ser gerados sozinho ao salvar, se já configurou nos passos anteriores. Caso não aconteça, preencher manualmente.

### Documentação Pronta e Manual
* **Recibos:** Na aba da venda, clique em **Resumo** para gerar documentações como notas, recibos para vendas fechadas, entre outros. 
* **Voucher:** Na aba de venda, clique em **Voucher** para gerar a documentação para seu cliente (será sempre relacionado ao tipo de produto vendido).
* Para emissões avulsas de documentos, vá em **Atendimentos/Vendas > Utilitários > Recibos / Voucher / Fatura (Série B)**. Caso a venda não esteja fechada, mas precisa entregar um recibo para o seu Cliente, basta preencher manualmente esse **Recibo Série B** e gerar a documentação rapidamente.

---

## 6. Lembretes

A tela inicial do sistema (ou **Outros > Lembretes**) funciona como uma central de notificações operacionais (embarques, check-in, etc.).

* **Configurações:** Em **Opções > Configurações**, você pode marcar/desmarcar o tipo de aviso que deseja receber e definir a antecedência dos alertas (ex: lembrar do check-in X dias antes).
* **Relatórios Rápidos:** Ao clicar em um lembrete (ex: "Há 22 embarques em 15/04"), o sistema gera um relatório analítico completo com cliente, bilhete, localizador, status e horários dos voos.

---

## 7. Financeiro

### Contas a Pagar e Receber:
* Acesse **Financeiro > Financeiro > A Pagar/Receber**. Selecione o período e o tipo de conta.
* **Liquidação:** Ao selecionar uma conta na planilha e clicar no fornecedor, você pode "Detalhar valores para liquidação" (imprimir relatório) ou **Liquidar**.

### Lançamento de Contas Fixas (Despesas da Agência):
1.  Clique em **Lançar > Mensais Fixas > Adicionar Mensalidade Fixa**.
2.  Selecione o **Credor** (ex: Claro NET), a categoria da despesa (ex: provedor de internet), valor e vencimento.
3.  **Mês de Competência:** Se o vencimento é dia 5, geralmente refere-se ao mês *Anterior ao vencimento*.
4.  Marque os meses correspondentes para automatizar os lançamentos.

### Abertura de Saldo & Movimento Bancário:
Para que o sistema financeiro bata corretamente, é necessário registrar o saldo inicial das contas bancárias (feito apenas uma vez).
* Vá em **Opções > Saldo de Contas > Abertura de Saldo**.
* Selecione o banco, a data e o saldo inicial. Salve.
* A partir desse momento, toda conta "Liquidada" no *A Pagar/Receber* sairá daquela tela e irá para o **Movimento**, refletindo no saldo real do banco selecionado.

---

## 8. Relatórios

Acesse **Relatórios gerenciais > Mapa de Produção** para extrair métricas de vendas através de diversos filtros.

### Exemplos Úteis de Relatórios de Vendas:
*(Configuração base: Período "X a Y" > Vendas)*
* **Visão Geral:** Tipo: Agência (Sintética).
* **Histórico de Compras por Cliente:** Tipo: Clientes (Analítico) > Analítico Simples > Ordenado por: Pax. *(Não exibe comissão ou emissor, ideal para enviar ao cliente).*
* **Vendas Agrupadas por Cia Aérea:** Tipo: Clientes (Sintético) > Analítico Simples > Agrupado por: 1 - Cia Aérea/Operadora.
* **Vendas Agrupadas por Passageiro:** Tipo: Clientes (Sintético) > Analítico Simples > Agrupado por: 17 - Nome do Pax.

### Relatórios Financeiros:
* **Posição Financeira:** Acesse **Financeiro > Financeiro > Resumos > Posição Financeira**. É o relatório mais completo. Mostra tarifas, taxas, comissão, RAV, lucro bruto, reembolsos, despesas gerais e previsão de 30 dias.
* **Fluxo de Caixa:** Exige que o sistema esteja totalmente alimentado. Mostra o saldo de cada conta bancária e se os recursos são suficientes para as previsões futuras.
* **Receitas/Despesas (Visão Anual):** Exibe um comparativo mês a mês (com gráficos) para analisar se a receita do mês cobriu as despesas operacionais da agência.