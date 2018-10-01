import axios from 'axios'

import config from '../../../config';

const Mutation = `
  extend type Mutation {
    addRole(name: String!): Role,
    updateRole(id: ID!, name: String, enabled: Boolean): Role,
    deleteRole(id: ID!): Role
  }
`;

export const mutationTypes = () => [Mutation];

export const mutationResolvers = {
    Mutation: {
        addRole(parent, args) {
            return axios.post('http://localhost:3000/role', {
                name: args.name,
                enabled: true
            }).then(res => res.data)
        },
        updateRole(parent, args) {
            return axios.patch('http://localhost:3000/role/' + args.id, args)
                .then(res => res.data)
        },
        deleteRole(parent, args) {
            return axios.delete('http://localhost:3000/role/' + args.id)
                .then(res => res.data)
        } 
    }
};
