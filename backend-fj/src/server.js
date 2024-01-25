import server from './app';
import 'dotenv/config';

const port = process.env.PORT || 3000;

server.listen(port);
console.log(`Server init in port ${port}`);