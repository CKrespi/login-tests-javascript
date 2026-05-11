// Vetor de usuários
const usuarios = [
    {
        id: 1,
        nome: 'Cauê',
        email: 'email@existente.com',
        senha: 'senhaCerta123',
        expirado: false
    },
    {
        id: 2,
        nome: 'Júlio',
        email: 'credencial@expirada.com',
        senha: 'senhaCerta123',
        expirado: true
    },
    {
        id: 3,
        nome: 'Matheus',
        email: 'usuario@valido.com',
        senha: 'senhaCerta123',
        expirado: false
    }
];

// Função de login
export function fazerLogin(email, senha) {

    // Valida e-mail e senha
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            if (usuarios[i].senha !== senha) {
                return 'Credenciais incorretas';
            }

            // Valida se a credencial está expirada
            if (usuarios[i].expirado) {
                return 'Renove suas credenciais';
            }

            // Sucesso
            return 'Login realizado com sucesso';
        }
    }

    // Usuário não encontrado
    return 'Credenciais incorretas';
}