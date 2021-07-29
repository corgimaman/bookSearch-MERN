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
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookWeRAdding: SavedBook!): User
        removeBook(bookId: ID!): User
    }
`

module.exports = typeDefs;