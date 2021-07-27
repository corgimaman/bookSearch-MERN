const { AuthenticationError } = require('apollo-server-express');
const { Book, User } = require('../models');
const { signToken } = require('../utils/auth'); 

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('savedBooks');
        },
        user: async (oarent, { username }) => {
            return User.findOne({ username }).populate('savedBooks');
        },
        books: async () => {
            return  Book.find();
        },
        book: async () => {
            return Book.find
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user exists for this e-mail address, did you mean to login?');
            }

            const passwordCheck = await user.isCorrectPassword(password);

            if (!passwordCheck) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);

            return { token, user };
        },
        // probably need to use Context here...
        saveBook: async (parent, args) => {

        },
        deleteBook: async (parent, args) => {

        }
    }
}

module.exports = resolvers;