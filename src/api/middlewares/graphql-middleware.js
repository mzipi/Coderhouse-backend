import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'
import { 
	getProductsController,
	postProductController,
	putProductController,
	deleteProductController 
} from '../../controllers/products-controller.js'

const schema = buildSchema(`
	input ProductInput {
		name: String
		price: Int
		image: String
	}
	type Product {
		id: ID!
		name: String
		price: Int
		image: String
	}
	type Query {
		products: [Product]
	}
	type Mutation {
		setProduct(body: ProductInput!): Product
		updateProduct(id: ID!, body: ProductInput!): Product
		delProduct(id: ID!): Product
	}
`)

export const graphqlMiddleware = graphqlHTTP({
	schema,
	rootValue: {
		products: getProductsController,
		setProduct: postProductController,
		updateProduct: putProductController,
		delProduct: deleteProductController
	},
	graphiql: true
})