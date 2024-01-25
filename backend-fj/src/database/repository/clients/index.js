import queries from "./sqlQueries";
import db from '../../conn';

class ClientsRepository {

    async findAll() {
        return await db.query(queries.getUsers);
    }

    async findById(id) {
        return await db.query(queries.getUserById, [id]);
    }

    async create(name, email, phone, cord_x, cord_y) {
        return await db.query(queries.createUser, [name, email, phone, cord_x, cord_y]);
    }
}

export default new ClientsRepository();