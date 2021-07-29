const { AuthenticationError } = require('apollo-server-express');
const { Book, User } = require('../models');
const { signToken } = require('../utils/auth'); 

const resolvers = {
    Query: {/*
        users: async () => {
            return User.find().populate('savedBooks');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('savedBooks');
        },
        books: async () => {
            return  Book.find();
        },
        book: async () => {
            return Book.find
        }
        me: async (parent, { username }) => {
            return User.findOne({ username })
        }*/
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('savedBooks');
            }
            throw new AuthenticationError('Cannot find user with that id!');
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
                throw new AuthenticationError('No user exists for this e-mail address, did you mean to register?');
            }

            const passwordCheck = await user.isCorrectPassword(password);

            if (!passwordCheck) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, { input }, context) => {
            const book = { ...input }
            if (context.user) {
                return User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedBooks: book } },
                    { new: true, runValidators: true }
                );
            }
            throw new AuthenticationError('You need to be logged in to save a book!');
        },
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                return User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId } } },
                    { new: true }
                );
            }
            throw new AuthenticationError('You need to be logged in to perform that action!');
        }
    }
}

module.exports = resolvers;