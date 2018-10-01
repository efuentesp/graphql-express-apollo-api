import axios from 'axios'

// Config
import config from '../../../config';

const Permission = `
  type Permission {
    id: ID!
    code: String!
    name: String!
    enabled: Boolean!
  }
`;

export const types = () => [Permission];

export const typeResolvers = {
  // Permission: {
  //   role(parent, args) {
  //     return axios.get(config.jsonServerUrl + '/permission')
  //       .then(res => res.data)                
  //   }
  // }
};