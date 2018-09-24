import axios from 'axios'

// Config
import config from '../../../config';

const User = `
  type User {
    id: ID!
    username: String!
    password: String!
    enabled: Boolean!
    role: Role!
  }
`;

export const types = () => [User];

export const typeResolvers = {
  User: {
    role(parent, args) {
      return axios.get(config.jsonServerUrl + '/role/' + parent.roleId)
        .then(res => res.data)                
    }
  }
};