import axios from 'axios'

import config from '../../../config';

const Query = `
  extend type Query {
    roleList: [Role],
    role(id: ID!): Role
  }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    roleList(parent, args) {
      return axios.get(config.jsonServerUrl + '/role')
        .then(res => res.data)
    },
    role(parent, args) {
      return axios.get(config.jsonServerUrl + '/role/' + args.id)
        .then(res => res.data)
    }
  }
};
