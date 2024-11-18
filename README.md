# Desafio técnico Cypress

Este repositório se trata de um desafio técnico realizado com Cypress, com o objetivo de automatizar testes WEB. Como critério do desafio era necessário integrar os testes a pipeline e SonarQube, como possuo mais conhecimentos em Github Actions minha decisão foi implementar CI com essa ferramenta e utilizar o SonarCloud Scan para análise do código já que possui integração com o Github Actions.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de validar os testes realizados, no entanto, está configurado para rodar em pipeline CI bastando apenas seguir as orientações abaixo. 

*Lembrando que as bibliotecas utilizadas foram instaladas como dependências de desenvolvimento.*

### 📋 Pré-requisitos

```
Cypress
NodeJS
```

## ⚙️ Executando os testes

Sugiro que utilize o comando abaixo para executar testes em modo headless:

```
npx cypress run
```

No modo headless os testes serão executados por padrão no browser Electron. Realizei uma configuração de script no packeage.json para utilizar o chrome como o browser, para isso utilize o commando abaixo:

```
npm run cy:run:chrome
```

Para utilizar a interface do Cypress, utilize o comando abaixo:

```
npx cypress open
```

Sugestão de navegador: Electron

*Nota: Para utilizar a interface do Cypress no navegador chrome o comando é 'npm run cy:open:chrome', é necessário possuir o Chrome instalado na sua maquina.*


### 🔩 Relatórios de testes

Foi utilizado o Github Actions e SonarCloud para gerar o relatório de testes

Para executar os workflow CI criado é necessário gerar um token no SonarCloud e inserir em um repositório do seu projeto, bem como criar um documento identificando qual organização e projeto deverá rodar, para verificar a documentação basta acessar os links abaixo:
* [Secrets Github](https://docs.github.com/pt/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) - Documento para adicionar Secrets ao repositório
* [SonarCloud e Github Actions](https://github.com/SonarSource/sonarcloud-github-action?tab=readme-ov-file) - Documento para integração entre SonarCloud e Github Actions
* [Análise Automática](https://sonarcloud.io/project/analysis_method?id={PROJECTID}) - Documento para integração entre SonarCloud e Github Actions

*Nota¹:Necessário verificar na administração do projeto dentro no SonarCloud se a opção de Análise Automática está desabilitada*

*Nota²: O documento de configuração da pipeline está feito rodar o projeto levando em consideração a realizaçõa dos passos descritos acima*

## 🛠️ Construído com

* [Cypress](https://www.cypress.io/) - Biblioteca para automatização WEB
* [NodeJS](https://nodejs.org/pt) - Ambiente de execução de JavaScript

## 📌 Versão

Utilizei [GIT](https://git-scm.com/) para controle de versão. 

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](https://github.com/elvisfagundes/teste-cypress-vox/blob/main/LICENSE) para detalhes.