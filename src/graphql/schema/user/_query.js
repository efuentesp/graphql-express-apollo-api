import axios from 'axios'

// Config
import config from '../../../config';

const Query = `
  extend type Query {
    userList: [User],
    user(id: ID!): User
  }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    userList(parent, args) {
      return axios.get(config.jsonServerUrl + '/user')
        .then(res => res.data)
    },
    user(parent, args) {
      return axios.get(config.jsonServerUrl + '/user/' + args.id)
        .then(res => res.data)      
    }
  }
};
