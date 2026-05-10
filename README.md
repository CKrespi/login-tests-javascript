# Sistema de Login com Testes Unitários em JavaScript

Desafio da Pós-graduação em Automação de Testes de Software — Módulo 3: Programação para Automação de Testes.

Projeto desenvolvido em JavaScript com foco em lógica de programação, validação de login e testes unitários utilizando Node.js e Assert.

---

## Objetivo do Projeto

Construir uma função de autenticação de usuários contendo validações para:

* Login realizado com sucesso
* Credenciais expiradas
* Usuário não encontrado
* Senha incorreta

Além disso, desenvolver testes unitários para validar todos os cenários.

---

## Tecnologias Utilizadas

* JavaScript
* Node.js
* Assert (Node)
* Mocha

---

## Estrutura do Projeto

```bash
src/
 ├── loginUsuarios.js

tests/
 ├── loginUsuarios.test.js
```

---

## Funcionalidades

* Cadastro de usuários em vetor de objetos
* Validação de email e senha
* Verificação de credenciais expiradas
* Retorno de mensagens de autenticação
* Cobertura de testes unitários

---

## Cenários Testados

1. Login realizado com sucesso
2. Credencial expirada
3. Usuário não encontrado
4. Senha incorreta

---

## Como Executar o Projeto

### Instalar dependências

```bash
npm install
```

### Executar os testes

```bash
npm test
```

---

## Exemplo de Uso

```javascript
fazerLogin('email@existente.com', 'senhaCerta123');
// Login realizado com sucesso
```

```javascript
fazerLogin('credencial@expirada.com', 'senhaCerta123');
// Renove suas credenciais
```

---

## Autor

Projeto acadêmico desenvolvido para fins de aprendizado em Automação de Testes de Software.
