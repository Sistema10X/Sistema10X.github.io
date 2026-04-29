---
author: Matheus Laidler
pubDatetime: 2026-04-26T05:05:17.000Z
title: "Manual do Monde para Agências de Viagem"
slug: manual-monde
featured: false
description: Domine o básico da ferramenta de BackOffice com este Manual.
tags: ['agente', 'turismo', 'backoffice', 'monde']
---

> Consiga utilizar o sistema de BackOffice Monde através desse manual.

## Sumário

* [1. Usuários e Contas](#1-usuários-e-contas)
* [2. Cadastrar Integração](#2-cadastrar-integração)
* [3. Cadastro de Fornecedores e Clientes](#3-cadastro-de-fornecedores-e-clientes)
* [4. Regra de Faturamento](#4-regra-de-faturamento)
* [5. Vendas e Documentação](#5-vendas-e-documentação)
* [6. Financeiro](#6-financeiro)
* [7. Relatórios](#7-relatórios)
* [8. Tarefas](#8-tarefas)

---

## 1. Usuários e Contas

Para convidarmos um novo usuário para usar a plataforma:
* Vá em **Funcionários -> Convidar novos usuários**.
* Coloque o nome, e-mail e qual o nível de acesso e permissão. 
* *Nota:* Dá para fazer de mais de um usuário ao mesmo tempo. Assim eles recebem um e-mail com o download do software, login, endereço da agência, etc. Isso cria o usuário do sistema configurado na aba "Pessoas". 
* **Usuário de pessoa já cadastrada:** Pode também criar o usuário de uma pessoa que já está cadastrada. Vá na aba **Usuário** e selecione a opção **"Esta pessoa é usuário do sistema"**, agora você poderá criar o usuário e a senha/nova senha.
* *Dica:* Você pode configurar planos de comissão e meta indo em **Funcionários -> Planos de comissão**.

Para configurar corretamente as permissões de usuários:
* Vá em **Funcionários -> Permissões de acesso** e pesquise. Você verá todas as permissões criadas.
* Em **Novo**, você poderá criar uma nova permissão. 
* Clicando em **Editar** (ou clicando duas vezes em cima), você poderá configurar exatamente o que o usuário com esse cargo poderá ver/fazer. Inclusive, aparecerá a lista dos usuários que já estão nesse cargo na lateral.

Para configurar e cadastrar as contas e cartões da agência:
* Vá em **Cadastros -> Contas e cartões**. É aqui que você configura qual é a conta bancária correta da agência.
* Clique em **Novo**. Na descrição, podemos colocar o nome do banco. Terá opções de agência, conta e banco.
* No campo "Banco", você selecionará o seu banco que já está dentro da plataforma (caso não esteja, você pode criar o seu banco primeiro em **Cadastros -> Banco**).

Formas de Pagamento (Opcional):
* Agora que já configuramos os usuários e o banco, também temos que configurar a forma de pagamento.
* Vá em **Cadastros -> Formas de pagamento -> Novo**. Aqui podemos criar o Pix, por exemplo (o sistema já tem cartão, boleto, etc., pré-configurados).

---

## 2. Cadastrar Integração

Antes de falarmos sobre o cadastro de fornecedor e cliente no dia a dia, é importante já resolvermos o cadastro das credenciais de integração das APIs dos fornecedores compatíveis com o Monde.

* Vá em **Cadastros -> Integrações -> Novo -> Selecionar o fornecedor** e coloque as credenciais.
* No campo **"Pessoa que será vinculada como representante nos produtos importado:"**, você selecionará a pessoa jurídica do fornecedor que *já vem cadastrada* no sistema. 
  * *Exemplos:* Se selecionarmos o Reserva Fácil, poderemos selecionar a pessoa jurídica "Rextur Advance" que já vem cadastrada. Para a BRT Consolidadora, você selecionará o "Grupo BRT". Na BestBuy, você selecionará o "Best Buy Hotel (Operadora)".
* As credenciais exigidas (como Código da Agência, URL do webservice, usuário e senha) são informações que o fornecedor deverá te entregar para realizar este cadastro.
* **Importante:** Este é um cadastro único e esta página não será mais visitada no futuro. Agora já preparamos o terreno para importar as vendas destes fornecedores lá na frente.

---

## 3. Cadastro de Fornecedores e Clientes

Agora sim, podemos falar sobre como cadastrar pessoas jurídicas e pessoas físicas dentro do Monde de forma tranquila. Como já falamos, os fornecedores com integração no Monde já vêm cadastrados. Qualquer outro fornecedor deverá ser cadastrado manualmente como Pessoa Jurídica.

**Cadastrando Fornecedores:**
* Vá em **Pessoas -> Novo -> Pessoa Jurídica** e preencha todo o formulário.
* Em **Dados Financeiros**, você poderá configurar um cartão de crédito.
* Na penúltima aba chamada **Fornecedor**, você terá opções importantes para quando se trata de uma Companhia Aérea: você precisa preencher o **Código (IATA)** e o **Número (IATA Numérico)**.

**Cadastrando Clientes:**
* Vá em **Pessoas -> Novo -> Pessoa Física** e preencha todo o formulário.
* No campo **Observação**, podemos colocar informações importantes de saúde e até preferências do cliente para CRM, como assento preferido, localização de quarto, etc.
* Em **Dados Financeiros**, poderá configurar o cartão de crédito do cliente.

> **Obs:** Você pode criar um usuário do sistema (seu funcionário) como pessoa física ou jurídica, e depois ir na aba "usuário" para configurar o login dele. Também é possível criar um cliente corporativo como pessoa jurídica; na hora da emissão, bastará selecioná-lo na venda.

---

## 4. Regra de Faturamento

Agora vamos configurar a regra de faturamento corretamente para fornecedores, clientes ou representantes.

* Vá em **Cadastros -> Regras de Faturamento -> Novo**. Selecione se quer criar a regra para cliente, fornecedor ou representado.
* Você pode pesquisar para ver quais regras já estão criadas pelo sistema e pode editar as que já vêm cadastradas. Abrindo uma delas, você poderá criar uma nova regra de faturamento ou editar a existente.
* Poderá selecionar regras baseadas no tipo de produto, destino, fornecedor, etc. 
* A parte mais importante é a **aba de fechamento**:
  * É necessário selecionar o **Período** (exemplo: *Semanal IATA*).
  * Selecionar a opção **Por data de:** (exemplo: *Venda*).
  * Selecionar o **Vencimento** (exemplo: *4 Dias úteis após fechamento*).
* Claro que essas informações você precisa colocar exatamente de acordo com a regra que o seu fornecedor te passou. Caso a opção no campo "Período" não tenha relação com o calendário que o fornecedor te enviou, você pode ir na opção **Customizado** e configurar um calendário manualmente de acordo.

Você pode criar uma regra de faturamento geral para todos os clientes, organizando corretamente o período de fechamento e vencimento. O mesmo pode ser feito de forma padronizada para os representantes.

---

## 5. Vendas e Documentação

Agora que já configuramos tudo de importante dentro da plataforma, desde usuários, conta bancária, clientes, fornecedores e as regras de faturamento, poderemos de fato começar a criar e importar as vendas.

### Vendas Manuais
* Vá em **Vendas -> Novo** para criar uma venda manualmente.
* Em **Pagante**, você selecionará o cliente cadastrado. Caso ele não exista ainda, poderá criá-lo indo nos três pontos `(...)` e clicando em nova pessoa física/jurídica (ou apenas escrevendo o nome onde o sistema busca a pessoa; se ela não existir, aparecerá a opção para cadastrar).
* Em **Produtos** e **"Novo:"**, você terá todas as opções de produtos, como *Diárias de Hospedagem* e *Passagem Aérea* (você pode ver e editar essa lista de tipos de produtos indo em **Cadastros -> Produtos**).
* Selecionando o produto, ele te mostrará um novo formulário relacionado a este item. Nele, você deverá preencher as informações corretas: fornecedores, representantes corretos, comissão, etc.

### Pagamentos e Documentação
Agora você poderá configurar o método de pagamento.
* Vá em **Pagamentos -> Novo**. Você terá opções de pagamento *direto para Fornecedor* ou *para a agência*.
* **Para a agência (Ex: PIX):** Se for PIX na agência, você pode ir em Opção de pagamento para agência -> Outros -> No campo *Inserir informações pré-cadastradas*, selecione o PIX. Caso não tenha, poderá criar clicando nos três pontinhos -> Novo.
* **Cartão de Crédito:** Ao selecionar cartão de crédito, você poderá utilizar um já cadastrado ou não. Se não, informe os dados do cartão (apenas os 4 últimos dígitos e a operadora) e selecione a quantidade de parcelas.
* **Cartão para fornecedores:** Você poderá selecionar/criar um cartão também, ou apenas deixar em "não informado" e já configurar as parcelas diretamente.
* Uma vez com os pagamentos configurados na venda, você terá botões operacionais para **Liquidar** e **Excluir**.
* **Documentação:** Ainda nessa mesma aba, o botão **Imprimir** possui opções interessantes para gerar a documentação para entregar ao cliente, como **Voucher**, **Recibo** e **Contratos**.

### Importar Vendas (Fornecedores Integrados)
* Ao ir em **Vendas -> Novo** para criar uma venda, você poderá clicar no botão **"Importar"** (fica ao lado de "Novo:" na aba de Produtos).
* Lá estarão todas as opções de integração que configuramos no passo 2. Selecionando o fornecedor, basta colocar a data do dia que você quer pegar as vendas e importar.
* Aparecerá a lista de vendas do dia. **Você terá que importar uma de cada vez**.
* Ao importar a venda, terá que selecionar qual a pessoa/cliente cadastrado relacionado nessa venda. Se o cliente não existe, você pode criá-lo ao escrever o nome e selecionar a opção de Cadastrar uma nova pessoa física/jurídica (ou ir nos três pontinhos do lado e selecionar a opção, que abrirá o formulário para cadastro).
* Pode aparecer uma tela para cadastrar outros passageiros depois também.
* Após isso, ele mostrará o formulário do produto importado já preenchido com as informações da venda. **Atenção:** Caso algum campo importante, como fornecedor e representante, esteja vazio, isso significa que ele ainda não está cadastrado no seu Monde. Então você poderá cadastrar o fornecedor ali mesmo (exemplo: uma cia aérea estrangeira não pré-cadastrada, como a Lufthansa).
* Com tudo certo, pode dar um **OK**. Se o pagamento foi efetuado diretamente com o fornecedor, o sistema importará o financeiro junto. Se o pagamento foi com a agência, você terá que colocar o recebimento manualmente.
* Uma vez que essas contas estão corretamente configuradas e com forma de pagamento, podemos olhar a aba **Financeiro** dentro da venda. É nela que poderemos ver como essa venda já se ligou automaticamente com o "Contas a pagar/a receber", e é também nesta aba que podemos **Gerar Pagamento Avulso** ou **Sinal**.

---

## 6. Financeiro

Agora que configuramos a plataforma, cadastramos os clientes e fornecedores, criamos e importamos as vendas da agência, temos que ver a parte do financeiro.

As vendas que importamos já vão sempre para a aba de "Contas a Pagar/Receber" de forma automática. Porém, essa aba se torna muito importante para estarmos sempre lançando *cada nova despesa da agência*, para que possamos ter um controle financeiro real e fiel.

* Vá em **Contas a Pagar/Receber -> Novo -> Contas a Pagar** (ou Contas a Receber).
* Em Contas a Pagar, por exemplo, você selecionará (ou criará) a Pessoa (física ou jurídica), uma Descrição para ajudar a identificar, a Conta (bancária), o vencimento, o valor, e o dia da liquidação (quando já tiver sido pago).
* Se for uma conta recorrente, você poderá marcar a opção **Repetir**.
* Em **Categoria**, selecionaremos o tipo de conta relacionado à despesa.

**Exemplo Prático - Criando a mensalidade do Monde:**
* **Pessoa:** Monde Sistemas (já existe)
* **Descrição:** Mensalidade
* **Conta:** Banco Cora (o banco que você cadastrou)
* **Valor:** XXX,XX
* **Liquidação:** XX/XX/XXXX
* **Repetir:** V (marcado)
* **Categoria:** Despesas Administrativas - Serviços de Locação (equipamentos, sistemas, ...)
* Dê **OK**.

Agora temos a mensalidade do sistema já configurada na plataforma. A ideia é sempre vir alimentando esta aba de acordo com todos os gastos fixos da agência (as relacionadas às vendas virão automaticamente).

* **Para Liquidar:** Caso queira liquidar uma ou mais contas, poderá selecioná-las na tela e clicar no botão **Liquidar**. Ali, basta selecionar o banco, a data e a forma de pagamento.
* Lembrando que existem mais áreas importantes do financeiro (como Demonstrativos, Fluxos, Extratos e Reembolsos) que podem ser acessados no menu superior **Financeiro**. Qualquer dúvida, você pode chamar o suporte do Monde no WhatsApp.

---

## 7. Relatórios

O Monde te dá vários tipos de relatórios. Inclusive, na aba superior 'Relatórios' podemos ver várias opções, mas vamos nos debruçar em alguns relatórios que você monta no uso do dia a dia e que não estão necessariamente nessa aba exclusiva.

**Relatórios nas abas de uso:**
* Ainda na aba de **Contas a Pagar/Receber**, podemos organizar o filtro superior para exibir o que precisamos (Tipo, Situação e Período desejado).
* Na tabela que aparece abaixo, poderemos escolher quais colunas queremos exibir no relatório. Basta clicar no **asterisco [*]** que fica na primeira coluna; ele mostrará todas as opções de colunas para você marcar (mostrar) ou desmarcar (tirar).
* Na parte de baixo da tabela, clicando com o botão direito do mouse, podemos selecionar opções importantes baseadas na coluna acima. Podemos mostrar uma **contagem de elementos** e até uma **soma dos valores** de cada item exibido naquela coluna.
* Após configurar tudo na tela, basta clicar em **Imprimir -> Dar um nome ao relatório**. Isso gera aquela tabela que você personalizou como um documento real de relatório.
* **Relatório de Vendas:** Este exato *modus operandi* pode ser utilizado na aba **Vendas** também. Em Vendas, podemos configurar os filtros e as colunas da tabela para termos um relatório gerencial muito interessante sobre as emissões. Podendo exibir todas as vendas de um mês e ativando colunas como RAV, Over (incentivo), Comissão, Taxas... E, por fim, gerar o relatório ao clicar em **Imprimir**.

**Relatórios do Menu:**
* Agora que vimos o relatório construído de vendas e o de contas a pagar/receber, podemos ver um relatório específico sobre as vendas relacionadas às formas de pagamento.
* Vá em **Relatórios -> Venda Por Forma de Pagamento**. Selecione o período e os filtros desejados. Você terá a lista na tela e poderá configurar a tabela. Clique em **Imprimir** para ter o relatório físico (também terá a opção de **Exportar para planilha** se desejar). Outra opção legal neste menu é o **Vendas Por Produto**.

Esses são os principais tipos de relatório no Monde. Eles só farão sentido e darão resultados precisos depois que o sistema estiver devidamente alimentado.

> **Dica:** Caso queira ver relatórios sobre rankeamento de clientes, listas de passageiros ou trechos aéreos emitidos, basta ir no menu superior **"Relatórios"**.

---

## 8. Tarefas

Agora que passamos por todas as partes importantes do operacional, vamos falar sobre uma funcionalidade de extrema importância: as tarefas. Você poderá usá-las como lembretes do que deve ser feito e até cadastrar tudo o que você vem fazendo para que aquela tarefa seja de fato concluída.

* Vá em **Tarefas -> Novo**.
* Você preencherá um formulário contendo o Título e a Descrição explicando a tarefa/lembrete (podendo ser um alerta de check-in ou check-out, por exemplo).
* Pode selecionar sobre qual pessoa a tarefa se trata, qual o tipo de categoria (por exemplo, relacionado a um cliente) e qual o vencimento (por exemplo, agendar para 24h antes do horário de check-in).
* **Histórico da Tarefa:** Se você fez algum passo dessa tarefa, mas ainda não a concluiu (ex: tentou ligar para o cliente mas ele não atendeu), você pode **editar** a tarefa criada e anotar o que você fez na aba **"Histórico"**. Depois que der OK, essa sua atividade vai ficar salva e cadastrada como um histórico dentro dessa tarefa.
* Ao finalizar totalmente o trabalho daquele lembrete, basta editar e selecionar a opção **Concluída**.

As próprias abas das vendas e das pessoas também possuem uma aba de tarefas embutida lá dentro, caso você queira ir criando as tarefas referentes àquelas pessoas ou àquelas vendas específicas diretamente por lá.

Ao abrir o Monde, a primeira aba que você verá será a listagem geral das suas tarefas. Ela mudará a cor de fundo para **vermelho** caso o prazo de alguma fique atrasado.

Isso contempla tudo o que é importante e básico para começar a utilizar o Monde.

---

### Suporte Oficial

Você pode achar toda a documentação oficial em vários artigos em [ajuda.monde.com.br](https://ajuda.monde.com.br/) e pesquisar exatamente o que precisar. Pode chamar o suporte deles via whatsapp em `(19) 3478-8880` ou e-mail `suporte@monde.com.br`.
