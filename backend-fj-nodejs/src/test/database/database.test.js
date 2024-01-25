import db from '../../database/conn';

describe('Teste de conexão com o banco de dados', () => {
  it('Deve se conectar ao banco de dados', async () => {
    const result = await db.query('SELECT 1 as result');
    expect(result.rows[0].result).toEqual(1);
  });
});
