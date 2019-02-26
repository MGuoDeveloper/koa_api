const {
	buildSchema,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString
} = require('graphql')
const gadgetGraphQLType = require('./gadgetType')
const Gadget = require('../models/gadget')


const schema = buildSchema(`
	type Query {
		hello: String
	}
`)

const rootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		gadget: {
			type: gadgetGraphQLType,
			args: {id: {type: GraphQLString}},
			resolve(parent, args) {
				return Gadget.findById(args.id)
			}
		}
	}
})

module.exports = new GraphQLSchema({
	query: rootQuery
})
