const Koa = require('koa')
const mount = require('koa-mount')
const graphqlHTTP = require('koa-graphql')
const app = new Koa()
const schema = require('./graphql/schema')
const initDB = require('./db')

initDB()

app.listen(9000)

app.use(mount('/graphql', graphqlHTTP({
	schema,
	graphiql: true
})))

app.on('error', err => {
	log.error('server error', err)
})
