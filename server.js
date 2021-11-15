import {createServer, Model, Response} from 'miragejs';

createServer({
  urlPrefix: 'http://localhost:8080',
  namespace: 'api',
  models: {
    user: Model,
  },
  seeds(server) {
    // Criar um usuário antes de iniciar o servidor
    server.create('user', {
      firstName: 'Ismael',
      lastName: 'Moreiraa',
      email: 'ismael.m@gmail.com',
      password: 'lnasdnd8383@sjs',
    });
  },
  routes() {
    this.post('/auth', (schema, request) => {
      const body = JSON.parse(request.requestBody);
      const user = schema.users.findBy({email: body.email});
      if (!user) {
        return new Response(404);
      }
      return user;
    });
    this.post('/user', (schema, request) => {
      const body = JSON.parse(request.requestBody);
      const user = schema.users.create(body);
      return user;
    });
  },
});
