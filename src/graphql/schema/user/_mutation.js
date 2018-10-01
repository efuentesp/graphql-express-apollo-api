import axios from 'axios'

import config from '../../../config';

const Mutation = `
  extend type Mutation {
    addUser(username: String!, password: String!, roleId: ID!): User,
    updateUser(id: ID!, username: String, password: String, roleId: ID, enabled: Boolean): User,
    deleteUser(id: ID!): User
  }
`;

export const mutationTypes = () => [Mutation];

export const mutationResolvers = {
    Mutation: {
        addUser(parent, args) {
            return axios.post('http://localhost:3000/user', {
                username: args.username,
                password: args.password,
                roleId: args.roleId,
                enabled: true
            }).then(res => res.data)
        },
        updateUser(parent, args) {
            return axios.patch('http://localhost:3000/user/' + args.id, args)
                .then(res => res.data)
        },
        deleteUser(parent, args) {
            return axios.delete('http://localhost:3000/user/' + args.id)
                .then(res => res.data)
        } 
    }
};
