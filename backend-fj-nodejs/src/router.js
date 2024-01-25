import Router from 'express';
import clients from './controller/clients';
import schemaUser from './controller/clients/schema';

const routers = Router();


routers.get('/api/users/travel', async (req, res) => {
    const data = await clients.readSortedByCities();
    return res.json(data);
});

routers.get('/api/users', async (req, res) => {
    const data = await clients.readAll();
    return res.json(data);
});

routers.get('/api/user/:id', async (req, res) => {
    const {id} = req.params;
    const data = await clients.readById(id);
    return res.json(data);
});

routers.post('/api/user', async (req, res) => {

    if(!(await schemaUser.isValid(req.body))) {
        return res
        .status(406)
        .json({
            message: "Body not are complete"
        });
    }

    const {name, email, phone, cord_x, cord_y} = req.body;

    const result = await clients.save(name, email, phone, cord_x, cord_y);

    if (result) {
        return res
        .status(202)
        .json({messade: "Usuário criado com sucesso! 👍"});
    } 

    return res
    .status(500)
    .json({message: "Ops, algo deu errado ao criar o usuário. Por favor, tente novamente. 😕"});
});

export default routers;