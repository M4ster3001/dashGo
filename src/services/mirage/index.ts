import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  createdAt: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `John doe ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10, new Date());
        },
      }),
    },
    seeds(seed) {
      seed.createList('user', 20);
    },
    routes() {
      this.namespace = 'localAPI';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.passthrough();
    },
  });

  return server;
}
