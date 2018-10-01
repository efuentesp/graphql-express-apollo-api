import axios from 'axios'

import config from '../../../config';

const Mutation = `
  extend type Mutation {
    addPermission(code: String!, name: String!): Permission,
    updatePermission(id: ID!, code: String, name: String, enabled: Boolean): Permission,
    deletePermission(id: ID!): Permission
  }
`;

export const mutationTypes = () => [Mutation];

export const mutationResolvers = {
    Mutation: {
        addPermission(parent, args) {
            return axios.post('http://localhost:3000/permission', {
                code: args.code,
                name: args.name,
                enabled: true
            }).then(res => res.data)
        },
        updatePermission(parent, args) {
            return axios.patch('http://localhost:3000/permission/' + args.id, args)
                .then(res => res.data)
        },
        deletePermission(parent, args) {
            return axios.delete('http://localhost:3000/permission/' + args.id)
                .then(res => res.data)
        } 
    }
};
