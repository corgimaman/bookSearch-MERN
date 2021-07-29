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

    input SavedBook {
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
        saveBook(input: SavedBook!): User
        removeBook(bookId: String): User
    }
`

module.exports = typeDefs;