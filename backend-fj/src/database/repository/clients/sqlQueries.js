export default {
    getUserById: 'SELECT * FROM clientes where id = $1;',
    getUsers: 'SELECT * FROM clientes;',
    createUser: 'INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ($1, $2, $3, $4, $5);'
};
