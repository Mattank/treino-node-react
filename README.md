Projeto simples para por em pratica alguns conceitos de desenvolvimento em Node.JS e React.

Backend
  API de Criação de Usuario.
  API de Geração de Token de autenticação.
  API para registrar um email a ser enviado e consumido pela Fila.
  Worker para Limpar Tokens expirados.
Front-end
  Tela de Login
  Tela de Registro
  Tela de Dashboard, com formulário para registrar os emails a ser enviados.

Testes Unitários.
  Teste para Criação de Usuario finalizado
  Teste para Criação do Token.
  Teste para Worker que Limpa o registro de tokens


TO DO
  Testes Unitários para API /email que registra os emails para a fila.
  Criar de fato uma estrutura de fila para enviar os emails.
  Para funcionar realmente precisaria de mais dados cadastrais para efetuar o SMTP para se conectar ao email e enviar o email.
