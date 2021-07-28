const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID!
        title: String!
        link: String
        image: String
        bookId: String
        description: String!
        authors: [String]
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
        bookCount: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    input savedBook {
        title: String
        link: String
        image: String
        bookId: String
        description: String
        authors: [String]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: savedBook): User
        removeBook(bookId: ID!): User
    }
`

module.exports = typeDefs;