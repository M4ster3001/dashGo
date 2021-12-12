import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response
} from 'miragejs'
import faker from 'faker'

type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },
    models: {
      user: Model.extend<Partial<User>>({})
    },
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `John doe ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        created_at() {
          return faker.date.recent(10, new Date())
        }
      })
    },
    seeds(seed) {
      seed.createList('user', 20)
    },
    routes() {
      this.namespace = 'localAPI'
      this.timing = 750

      // eslint-disable-next-line func-names
      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams
        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(per_page)
        const pageEnd = pageStart + Number(per_page)
        const users = this.serialize(schema.all('user'))
          .users.sort(
            (a: User, b: User) =>
              +(a.created_at > b.created_at) || -(a.created_at < b.created_at)
          )
          .slice(pageStart, pageEnd)

        return new Response(200, { 'x-total-count': String(total) }, { users })
      })
      this.get('/users/:id')
      this.post('/users')

      this.passthrough()
    }
  })

  return server
}
