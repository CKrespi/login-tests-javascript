import { fazerLogin } from '../src/loginUsuarios.js';
import assert from 'node:assert';

describe('Testes de Login de Usuários', function () {
    it('Validar que o login é realizado com sucesso quando email e senha estão corretos', function () {
        // Arrange
        const emailInformado = 'email@existente.com';
        const senhaInformada = 'senhaCerta123';
        const mensagemEsperada = 'Login realizado com sucesso';

        // Act
        const retornoDaFuncao = fazerLogin(emailInformado, senhaInformada);

        // Assert
        assert.equal(retornoDaFuncao, mensagemEsperada);
    });

    it('Validar que uma mensagem é retornada quando as credenciais estão expiradas', function () {
        // Arrange
        const emailInformado = 'credencial@expirada.com';
        const senhaInformada = 'senhaCerta123';
        const mensagemEsperada = 'Renove suas credenciais';

        // Act
        const retornoDaFuncao = fazerLogin(emailInformado, senhaInformada);

        // Assert
        assert.equal(retornoDaFuncao, mensagemEsperada);
    });

    it('Validar que uma mensagem é retornada quando o usuário não é encontrado', function () {
        // Arrange
        const emailInformado = 'naoexiste@email.com';
        const senhaInformada = 'senhaCerta123';
        const mensagemEsperada = 'Credenciais incorretas';

        // Act
        const retornoDaFuncao = fazerLogin(emailInformado, senhaInformada);

        // Assert
        assert.equal(retornoDaFuncao, mensagemEsperada);
    });

    it('Validar que uma mensagem é retornada quando a senha está incorreta para o usuário encontrado', function () {
        // Arrange
        const emailInformado = 'usuario@valido.com';
        const senhaInformada = 'senhaErrada';
        const mensagemEsperada = 'Credenciais incorretas';

        // Act
        const retornoDaFuncao = fazerLogin(emailInformado, senhaInformada);

        // Assert
        assert.equal(retornoDaFuncao, mensagemEsperada);
    });
});