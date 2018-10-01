import axios from 'axios'

// Config
import config from '../../../config';

const Query = `
  extend type Query {
    permissionList: [Permission],
    permission(id: ID!): Permission
  }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    permissionList(parent, args) {
      return axios.get(config.jsonServerUrl + '/permission')
        .then(res => res.data)
    },
    permission(parent, args) {
      return axios.get(config.jsonServerUrl + '/permission/' + args.id)
        .then(res => res.data)      
    }
  }
};
