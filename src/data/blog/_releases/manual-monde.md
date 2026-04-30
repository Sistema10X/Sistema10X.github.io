---
author: Matheus Laidler
pubDatetime: 2026-04-26T05:05:17.000Z
title: "Manual do Monde para Agências de Viagem"
slug: manual-monde
featured: true
description: Domine o básico da ferramenta de BackOffice com este Manual.
tags: ['agente', 'turismo', 'backoffice', 'monde']
---

> Consiga utilizar o sistema de BackOffice Monde através desse manual.

## Informações Rápidas e Suporte Oficial

Antes de começar, deixe esses contatos à mão. O suporte do Monde é **gratuito** e bastante ágil.

* **Documentação oficial:** [ajuda.monde.com.br](https://ajuda.monde.com.br/) — central de ajuda completa, com mais de 400 artigos organizados por área (Cadastros, Vendas, Integrações, Financeiro, etc.).
* **Suporte por WhatsApp/Telefone:** `(19) 3478-8880`
* **Suporte por e-mail:** `suporte@monde.com.br`
* **Primeiros passos:** [Acesso ao Sistema](https://ajuda.monde.com.br/pt-BR/collections/13334393-acesso-ao-sistema) (instalação, login, requisitos) e [Primeiros Passos](https://ajuda.monde.com.br/pt-BR/collections/13350400-primeiros-passos).

> **Suporte e Treinamento Gratuitos:** Você pode pedir ao suporte oficial **qualquer auxílio sem custo adicional** — desde tirar uma dúvida pontual até agendar um **treinamento completo** para você ou para a equipe. Aproveite. Veja os materiais já disponíveis em [Treinamentos](https://ajuda.monde.com.br/pt-BR/collections/13326830-treinamentos).

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

<img width="45%" alt="image" src="https://github.com/user-attachments/assets/71f14270-ae90-478d-9895-8565f4c29999" />

Para convidarmos um novo usuário para usar a plataforma:
* Vá em **Funcionários -> Convidar novos usuários**.
* Coloque o nome, e-mail e qual o nível de acesso e permissão. 
* *Nota:* Dá para fazer de mais de um usuário ao mesmo tempo. Assim eles recebem um e-mail com o download do software, login, endereço da agência, etc. Isso cria o usuário do sistema configurado na aba "Pessoas".
  
   <img width="40%" alt="image" src="https://github.com/user-attachments/assets/b4b38f25-a1c3-4ff6-96cf-59370bd752fe" />

* **Usuário de pessoa já cadastrada:** Pode também criar o usuário de uma pessoa física que já está cadastrada. Editando a Pessoa Física cadastrada, vá na aba **Usuário** e selecione a opção **"Esta pessoa é usuário do sistema"**, agora você poderá criar o usuário e a senha/nova senha.
* *Dica:* Você pode configurar planos de comissão e meta indo em **Funcionários -> Planos de comissão**.
  
   <img width="45%" alt="image" src="https://github.com/user-attachments/assets/2a7d5769-e149-49ac-91f8-2a30ccc7f65c" />

Para configurar corretamente as permissões de usuários:
* Vá em **Funcionários -> Permissões de acesso** e pesquise. Você verá todas as permissões criadas.
* Em **Novo**, você poderá criar uma nova permissão. 
* Clicando em **Editar** (ou clicando duas vezes em cima), você poderá configurar exatamente o que o usuário com esse cargo poderá ver/fazer. Inclusive, aparecerá a lista dos usuários que já estão nesse cargo na lateral.


Para configurar e cadastrar as contas e cartões da agência:
* Vá em **Cadastros -> Contas e cartões**. É aqui que você configura qual é a conta bancária correta da agência.
* Clique em **Novo**. Na descrição, podemos colocar o nome do banco. Terá opções de agência, conta e banco.
* No campo "Banco", você selecionará o seu banco que já está dentro da plataforma (caso não esteja, você pode criar o seu banco primeiro em **Cadastros -> Banco**).
   
   <img width="25%" alt="image" src="https://github.com/user-attachments/assets/14e1ae0e-5014-4dfc-8725-96d81c22f0a3" />

Formas de Pagamento (Opcional):
* Agora que já configuramos os usuários e o banco, também temos que configurar a forma de pagamento.
* Vá em **Cadastros -> Formas de pagamento -> Novo**. Aqui podemos criar o Pix, por exemplo (o sistema já tem cartão, boleto, etc., pré-configurados).

**Documentação oficial:**
* [Como ativar e desativar Usuários](https://ajuda.monde.com.br/pt-BR/articles/11556131-como-ativar-e-desativar-usuarios)
* [Como configurar Permissões de Acesso](https://ajuda.monde.com.br/pt-BR/articles/11556064-como-configurar-permissoes-de-acesso)
* [Como funcionam os Planos de Comissão](https://ajuda.monde.com.br/pt-BR/articles/11556681-como-funcionam-os-planos-de-comissao)
* [Como cadastrar Contas e Cartões](https://ajuda.monde.com.br/pt-BR/articles/11555767-como-cadastrar-contas-e-cartoes)
* [Como cadastrar Bancos](https://ajuda.monde.com.br/pt-BR/articles/11555788-como-cadastrar-bancos)
* [Como cadastrar novas Formas de Pagamento](https://ajuda.monde.com.br/pt-BR/articles/11556357-como-cadastrar-novas-formas-de-pagamento-para-contas-a-pagar-receber)

---

## 2. Cadastrar Integração

Antes de falarmos sobre o cadastro de fornecedor e cliente no dia a dia, é importante já resolvermos o cadastro das credenciais de integração das APIs dos fornecedores compatíveis com o Monde.

* Vá em **Cadastros -> Integrações -> Novo -> Selecionar o fornecedor** e coloque as credenciais.
     
     <img width="40%" alt="image" src="https://github.com/user-attachments/assets/ff7a6a12-940a-4de9-833b-0baf1b593c1a" />
     
* No campo **"Pessoa que será vinculada como representante nos produtos importado:"**, você selecionará a pessoa jurídica do fornecedor que *já vem cadastrada* no sistema. 
  * *Exemplos:* Se selecionarmos o Reserva Fácil, poderemos selecionar a pessoa jurídica "Rextur Advance" que já vem cadastrada. Para a BRT Consolidadora, você selecionará o "Grupo BRT". Na BestBuy, você selecionará o "Best Buy Hotel (Operadora)".
* As credenciais exigidas (como Código da Agência, URL do webservice, usuário e senha) são informações que o fornecedor deverá te entregar para realizar este cadastro.
* **Importante:** Este é um cadastro único e esta página não será mais visitada no futuro. Agora já preparamos o terreno para importar as vendas destes fornecedores lá na frente.

   <img width="40%" alt="image" src="https://github.com/user-attachments/assets/4a048a33-f880-4ba8-8792-b470543df49c" />

**Documentação oficial:**
* [Como habilitar a integração com fornecedores](https://ajuda.monde.com.br/pt-BR/articles/11556337-como-habilitar-a-integracao-com-fornecedores)
* [Quais são os sistemas disponíveis para importação de vendas](https://ajuda.monde.com.br/pt-BR/articles/11556646-quais-sao-os-sistemas-disponiveis-para-importacao-de-vendas)
* [Como alterar as credenciais das integrações](https://ajuda.monde.com.br/pt-BR/articles/11555803-como-alterar-as-credenciais-das-integracoes)
* [Coleção completa de Integrações](https://ajuda.monde.com.br/pt-BR/collections/13326932-integracoes) (mais de 100 artigos por fornecedor)

---

## 3. Cadastro de Fornecedores e Clientes

Agora sim, podemos falar sobre como cadastrar pessoas jurídicas e pessoas físicas dentro do Monde de forma tranquila. Como já falamos, os fornecedores com integração no Monde já vêm cadastrados. Qualquer outro fornecedor deverá ser cadastrado manualmente como Pessoa Jurídica.

**Cadastrando Fornecedores:**
* Vá em **Pessoas -> Novo -> Pessoa Jurídica** e preencha todo o formulário.
* Em **Dados Financeiros**, você poderá configurar um cartão de crédito.
* Na penúltima aba chamada **Fornecedor**, você terá opções importantes para quando se trata de uma Companhia Aérea: você precisa preencher o **Código (IATA)** e o **Número (IATA Numérico)**.

   <img width="45%" alt="image" src="https://github.com/user-attachments/assets/359d5ff0-5808-452a-ac16-2109409b6763" />

**Cadastrando Clientes:**
* Vá em **Pessoas -> Novo -> Pessoa Física** e preencha todo o formulário (para cliente corporativo, selecione Pessoa Jurídica).
* No campo **Observação**, podemos colocar informações importantes de saúde e até preferências do cliente para CRM, como assento preferido, localização de quarto, etc.
* Em **Dados Financeiros**, poderá configurar o cartão de crédito do cliente se achar necessário (a agência não tem obrigação de guardar esse dado crítico).

   <img width="45%" alt="image" src="https://github.com/user-attachments/assets/fcdfb1e7-f288-4602-8062-c7c5dce172df" />


> **Obs:** Você pode criar um usuário do sistema (seu funcionário) como pessoa física ou jurídica, e depois ir na aba "usuário" para configurar o login dele.

**Documentação oficial:**
* [Como cadastrar, editar e consultar Pessoas](https://ajuda.monde.com.br/pt-BR/articles/11556520-como-cadastrar-editar-e-consultar-pessoas)
* [Como cadastrar Fornecedores e Representantes](https://ajuda.monde.com.br/pt-BR/articles/11556726-como-cadastrar-fornecedores-e-representantes)
* [Como converter o tipo de cadastro de Pessoa Física e Jurídica](https://ajuda.monde.com.br/pt-BR/articles/11556635-como-converter-o-tipo-de-cadastro-de-pessoa-fisica-e-juridica)

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

<img width="65%" alt="image" src="https://github.com/user-attachments/assets/cb613c62-0e87-4f54-a045-cafb439953db" />

Você pode criar uma regra de faturamento geral para todos os clientes, organizando corretamente o período de fechamento e vencimento. O mesmo pode ser feito de forma padronizada para os representantes.

**Documentação oficial:**
* [Fatura Cliente: Como lançar, conferir e emitir](https://ajuda.monde.com.br/pt-BR/articles/11555792-fatura-cliente-como-lancar-conferir-e-emitir)
* [Novidades sobre Regras de Faturamento](https://ajuda.monde.com.br/pt-BR/articles/68816-novidades)

---

## 5. Vendas e Documentação

Agora que já configuramos tudo de importante dentro da plataforma, desde usuários, conta bancária, clientes, fornecedores e as regras de faturamento, poderemos de fato começar a criar e importar as vendas.

### Vendas Manuais
* Vá em **Vendas -> Novo** para criar uma venda manualmente.
* Em **Pagante**, você selecionará o cliente cadastrado. Caso ele não exista ainda, poderá criá-lo indo nos três pontos `(...)` e clicando em nova pessoa física/jurídica (ou apenas escrevendo o nome onde o sistema busca a pessoa; se ela não existir, aparecerá a opção para cadastrar).
* Em **Produtos** e **"Novo:"**, você terá todas as opções de produtos, como *Diárias de Hospedagem* e *Passagem Aérea* (você pode ver e editar essa lista de tipos de produtos indo em **Cadastros -> Produtos**).
   
   <img width="60%" alt="image" src="https://github.com/user-attachments/assets/a6e697f7-cadc-488e-b40d-3a40ea7273ad" />

* Selecionando o produto, ele te mostrará um novo formulário relacionado a este item. Nele, você deverá preencher as informações corretas: fornecedores, representantes corretos, comissão, etc.

   <img width="55%" alt="image" src="https://github.com/user-attachments/assets/585646c7-b3fc-43c7-bf70-125f3b10e4ff" />

### Pagamentos e Documentação
Agora você poderá configurar o método de pagamento.
* Vá em **Pagamentos -> Novo**. Você terá opções de pagamento *direto para Fornecedor* ou *para a agência*.
   
   <img width="45%" alt="image" src="https://github.com/user-attachments/assets/57da77c1-f05a-44e1-b4de-19376150a302" />

* **Para a agência (Ex: PIX):** Se for PIX na agência, você pode ir em Opção de pagamento para agência -> Outros -> No campo *Inserir informações pré-cadastradas*, selecione o PIX. Caso não tenha, poderá criar clicando nos três pontinhos -> Novo.
* **Cartão de Crédito:** Ao selecionar cartão de crédito, você poderá utilizar um já cadastrado ou não. Se não, informe os dados do cartão (apenas os 4 últimos dígitos e a operadora) e selecione a quantidade de parcelas.
* **Cartão para fornecedores:** Você poderá selecionar/criar um cartão também, ou apenas deixar em "não informado" e já configurar as parcelas diretamente.
* Uma vez com os pagamentos configurados na venda, você terá botões operacionais para **Liquidar** e **Excluir**.
   
   <img width="50%" alt="image" src="https://github.com/user-attachments/assets/33c2dbb9-47e8-47b9-896e-5f6a8d33d244" />

* **Documentação:** Ainda nessa mesma aba, o botão **Imprimir** possui opções interessantes para gerar a documentação para entregar ao cliente, como **Voucher**, **Recibo** e **Contratos**.
   
   <img width="60%" alt="image" src="https://github.com/user-attachments/assets/322e215d-cfb3-47c1-9699-3ee718f18d5c" />
   
   * Prévia de documentações gerada (nesse caso foi selecionado mais de um - voucher e recibo):
      
      <img width="60%" alt="reciboVoucher" src="https://github.com/user-attachments/assets/6f6c6a2f-e272-4650-b227-c521018b2039" />

### Importar Vendas (Fornecedores Integrados)
* Ao ir em **Vendas -> Novo** para criar uma venda, você poderá clicar no botão **"Importar"** (fica ao lado de "Novo:" na aba de Produtos).
   
   <img width="45%" alt="image" src="https://github.com/user-attachments/assets/53df891f-1df2-4a27-9a12-6c348228f28e" />

* Lá estarão todas as opções de integração que configuramos no passo 2. Selecionando o fornecedor, basta colocar a data do dia que você quer pegar as vendas e importar.
* Aparecerá a lista de vendas do dia. **Você terá que importar uma de cada vez**.

   <img width="50%" alt="image" src="https://github.com/user-attachments/assets/715f3565-7dc0-42b0-87fd-5956397f6f5d" />

* Ao importar a venda, terá que selecionar qual a pessoa/cliente cadastrado relacionado nessa venda. Se o cliente não existe, você pode criá-lo ao escrever o nome e selecionar a opção de Cadastrar uma nova pessoa física/jurídica (ou ir nos três pontinhos do lado e selecionar a opção, que abrirá o formulário para cadastro).

   <img width="50%" alt="image" src="https://github.com/user-attachments/assets/0bde165c-8b65-47e5-8feb-3ac6a6d4ba29" />

* Pode aparecer uma tela para cadastrar outros passageiros depois também, segue o mesmo padrão.
* Após isso, ele mostrará o formulário do produto importado já preenchido com as informações da venda (como o da imagem de produto com a Air France preenchido da seção anterior). 

**Atenção:** Caso algum campo importante, como fornecedor e representante, esteja vazio, isso significa que ele ainda não está cadastrado no seu Monde. Então você poderá cadastrar o fornecedor ali mesmo (exemplo: uma cia aérea estrangeira não pré-cadastrada, como a Lufthansa - cadastrar com código IATA na aba Fornecedor).

* Com tudo certo, pode dar um **OK**. Se o pagamento foi efetuado diretamente com o fornecedor, o sistema importará o financeiro junto. Se o pagamento foi com a agência, você terá que colocar o recebimento manualmente e, claro, terá que liquidar manualmente também.
* Uma vez que essas contas estão corretamente configuradas e com forma de pagamento, podemos olhar a aba **Financeiro** dentro da venda. É nela que poderemos ver como essa venda já se ligou automaticamente com o "Contas a pagar/a receber", e é também nesta aba que podemos **Gerar Pagamento Avulso** ou **Sinal**.

> **⚠️ Anomalias na Importação:** Se aparecer **qualquer comportamento estranho** na importação de venda de qualquer fornecedor (venda que não veio, valor divergente, campo vazio que não deveria estar, erro de credencial, etc.), o agente deve **chamar o suporte do Monde imediatamente** e pedir para que **eles também abram um chamado junto ao fornecedor**. Isso acelera muito a resolução, porque o problema costuma estar na ponta da API do fornecedor — e o Monde tem canal direto com eles. Veja [Solução de Problemas — Importação e Lançamento de Vendas](https://ajuda.monde.com.br/pt-BR/articles/11555716-solucao-de-problemas-importacao-e-lancamento-de-vendas).

**Documentação oficial:**
* [Como cadastrar Vendas](https://ajuda.monde.com.br/pt-BR/articles/11556104-como-cadastrar-vendas)
* [Formas de pagamento na venda: como registrar corretamente](https://ajuda.monde.com.br/pt-BR/articles/11555887-formas-de-pagamento-na-venda-como-registrar-corretamente-no-monde)
* [Quais são e como usar as Impressões de Vendas (Voucher, Recibo, Contrato)](https://ajuda.monde.com.br/pt-BR/articles/11555776-quais-sao-e-como-usar-as-impressoes-de-vendas)
* [Como gerar pagamento avulso ou sinal ao fornecedor na venda](https://ajuda.monde.com.br/pt-BR/articles/11556250-como-gerar-pagamento-avulso-ou-sinal-ao-fornecedor-na-venda)
* [Como habilitar a integração com fornecedores (importação)](https://ajuda.monde.com.br/pt-BR/articles/11556337-como-habilitar-a-integracao-com-fornecedores)
* [Solução de Problemas — Importação e Lançamento de Vendas](https://ajuda.monde.com.br/pt-BR/articles/11555716-solucao-de-problemas-importacao-e-lancamento-de-vendas)

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
   
   <img width="50%" alt="image" src="https://github.com/user-attachments/assets/337e4596-4119-4cd7-8de6-dd89a9c58ceb" />

Agora temos a mensalidade do sistema já configurada na plataforma. A ideia é sempre vir alimentando esta aba de acordo com todos os gastos fixos da agência (as relacionadas às vendas virão automaticamente).

* **Para Liquidar:** Caso queira liquidar uma ou mais contas, poderá selecioná-las na tela e clicar no botão **Liquidar**. Ali, basta selecionar o banco, a data e a forma de pagamento. Caso queira liquidar uma conta na aba de edição/criação, basta colocar a data da liquidação e continuar esse mesmo procedimento com o banco.
* Lembrando que existem mais áreas importantes do financeiro (como Demonstrativos, Fluxos, Extratos e Reembolsos) que podem ser acessados no menu superior **Financeiro**.

**Documentação oficial:**
* [Como cadastrar e liquidar Contas a Pagar/Receber](https://ajuda.monde.com.br/pt-BR/articles/11556710-como-cadastrar-e-liquidar-contas-a-pagar-receber)
* [Como cadastrar uma Conta a Pagar/Receber recorrente ou em parcelas](https://ajuda.monde.com.br/pt-BR/articles/11556603-como-cadastrar-uma-conta-a-pagar-receber-recorrente-ou-em-parcelas)
* [Demonstrativo de Resultado: entenda como funciona](https://ajuda.monde.com.br/pt-BR/articles/11555890-demonstrativo-de-resultado-entenda-como-funciona)
* [Como analisar o relatório de Fluxo de Caixa](https://ajuda.monde.com.br/pt-BR/articles/11556098-como-analisar-o-relatorio-de-fluxo-de-caixa)
* [Extrato de Conta: entenda como funciona](https://ajuda.monde.com.br/pt-BR/articles/11556172-extrato-de-conta-entenda-como-funciona)
* [Como utilizar o relatório de Reembolsos](https://ajuda.monde.com.br/pt-BR/articles/11556278-como-utilizar-o-relatorio-de-reembolsos)
* [Solução de Problemas — Contas a Pagar/Receber](https://ajuda.monde.com.br/pt-BR/articles/11951087-solucao-de-problemas-contas-a-pagar-receber)

---

## 7. Relatórios

O Monde te dá vários tipos de relatórios. Inclusive, na aba superior 'Relatórios' podemos ver várias opções, mas vamos nos debruçar em alguns relatórios que você monta no uso do dia a dia e que não estão necessariamente nessa aba exclusiva.

**Relatórios nas abas de uso:**
* Ainda na aba de **Contas a Pagar/Receber**, podemos organizar o filtro superior para exibir o que precisamos (Tipo, Situação e Período desejado).
* Na tabela que aparece abaixo, poderemos escolher quais colunas queremos exibir no relatório. Basta clicar no **asterisco [*]** que fica na primeira coluna; ele mostrará todas as opções de colunas para você marcar (mostrar) ou desmarcar (tirar).
   
   <img width="25%" alt="image" src="https://github.com/user-attachments/assets/49e17470-d92a-4b80-ae2d-e322df0f662d" />

* Na parte de baixo da tabela, clicando com o botão direito do mouse, podemos selecionar opções importantes baseadas na coluna acima. Podemos mostrar uma **contagem de elementos** e até uma **soma dos valores** de cada item exibido naquela coluna.

   <img width="25%" alt="image" src="https://github.com/user-attachments/assets/2b1379b0-2a05-4224-8894-e574883ee5fd" />

* Após configurar tudo na tela, basta clicar em **Imprimir -> Dar um nome ao relatório**. Isso gera aquela tabela que você personalizou como um documento real de relatório.
   
   <img width="50%" alt="image" src="https://github.com/user-attachments/assets/3879d49a-4446-431d-b6b9-747fa193a4dc" />
   
* **Relatório de Vendas:** Este exato *modus operandi* pode ser utilizado na aba **Vendas** também. Em Vendas, podemos configurar os filtros e as colunas da tabela para termos um relatório gerencial muito interessante sobre as emissões. Podendo exibir todas as vendas de um mês e ativando colunas como RAV, Over (incentivo), Comissão, Taxas... E, por fim, gerar o relatório ao clicar em **Imprimir**.

   <img width="45%" alt="image" src="https://github.com/user-attachments/assets/c0785f91-8321-4672-b050-100064bb16ca" />

**Relatórios do Menu:**
* Agora que vimos o relatório construído de vendas e o de contas a pagar/receber, podemos ver um relatório específico sobre as vendas relacionadas às formas de pagamento.
   
   <img width="35%" alt="image" src="https://github.com/user-attachments/assets/dcba4e9b-180e-4d32-bda8-a2d25e603e02" />

* Vá em **Relatórios -> Venda Por Forma de Pagamento**. Selecione o período e os filtros desejados. Você terá a lista na tela e poderá configurar a tabela. Clique em **Imprimir** para ter o relatório físico (também terá a opção de **Exportar para planilha** se desejar). Outra opção legal neste menu é o **Vendas Por Produto**.

   <img width="55%" alt="image" src="https://github.com/user-attachments/assets/bfe3926e-fdd6-41ed-920f-d4b26991c818" />


Esses são os principais tipos de relatório no Monde. Eles só farão sentido e darão resultados precisos depois que o sistema estiver devidamente alimentado.

> **Dica:** Caso queira ver relatórios sobre rankeamento de clientes, listas de passageiros ou trechos aéreos emitidos, basta ir no menu superior **"Relatórios"**.

**Documentação oficial:**
* [Como consultar o relatório gerencial do cadastro de Vendas](https://ajuda.monde.com.br/pt-BR/articles/11555983-como-consultar-o-relatorio-gerencial-do-cadastro-de-vendas)
* [Como adicionar e remover colunas nos relatórios](https://ajuda.monde.com.br/pt-BR/articles/11556023-como-adicionar-e-remover-colunas-nos-relatorios)
* [Aprenda a pesquisar e refinar informações dos relatórios](https://ajuda.monde.com.br/pt-BR/articles/11556027-aprenda-a-pesquisar-e-refinar-informacoes-dos-relatorios-no-monde)
* [Como exportar relatórios (XLS / Texto)](https://ajuda.monde.com.br/pt-BR/articles/11556353-como-exportar-relatorios)
* [Como analisar o desempenho mensal dos vendedores](https://ajuda.monde.com.br/pt-BR/articles/11555985-como-analisar-o-desempenho-mensal-dos-vendedores)
* [Coleção: Personalize seus Relatórios](https://ajuda.monde.com.br/pt-BR/collections/13352178-personalize-seus-relatorios)

---

## 8. Tarefas

Agora que passamos por todas as partes importantes do operacional, vamos falar sobre uma funcionalidade de extrema importância: as tarefas. Você poderá usá-las como lembretes do que deve ser feito e até cadastrar tudo o que você vem fazendo para que aquela tarefa seja de fato concluída.

  <img width="65%" alt="image" src="https://github.com/user-attachments/assets/f2e0dbe4-9466-45e0-a611-fc06005ce389" />

* Vá em **Tarefas -> Novo**.
* Você preencherá um formulário contendo o Título e a Descrição explicando a tarefa/lembrete (podendo ser um alerta de check-in ou check-out, por exemplo).
* Pode selecionar sobre qual pessoa a tarefa se trata, qual o tipo de categoria (por exemplo, relacionado a um cliente) e qual o vencimento (por exemplo, agendar para 24h antes do horário de check-in).
* **Histórico da Tarefa:** Se você fez algum passo dessa tarefa, mas ainda não a concluiu (ex: tentou ligar para o cliente mas ele não atendeu), você pode **editar** a tarefa criada e anotar o que você fez na aba **"Histórico"**. Depois que der OK, essa sua atividade vai ficar salva e cadastrada como um histórico dentro dessa tarefa.

   <img width="50%" alt="image" src="https://github.com/user-attachments/assets/90d36a5a-4be7-4c17-a210-3433d8f67082" />

* Ao finalizar totalmente o trabalho daquele lembrete, basta editar e selecionar a opção **Concluída**.
   

As próprias abas das vendas e das pessoas também possuem uma aba de tarefas embutida lá dentro, caso você queira ir criando as tarefas referentes àquelas pessoas ou àquelas vendas específicas diretamente por lá.

Ao abrir o Monde, a primeira aba que você verá será a listagem geral das suas tarefas. Ela mudará a cor de fundo para **vermelho** caso o prazo de alguma fique atrasado. Caso esteja no dia de vencimento, ficará com a cor azul.

**Documentação oficial:**
* [Tarefas: entenda como funciona](https://ajuda.monde.com.br/pt-BR/articles/11556426-tarefas-entenda-como-funciona)

---

Isso contempla tudo o que é importante e básico para começar a utilizar o Monde.

> Para qualquer dúvida pontual, treinamento ou ajuste fino, lembre que o suporte do Monde é **gratuito**: WhatsApp `(19) 3478-8880`, e-mail `suporte@monde.com.br` ou a central completa em [ajuda.monde.com.br](https://ajuda.monde.com.br/).
