import axios from 'axios'

import config from '../../../config';

const Query = `
  extend type Query {
    roleList: [Role]
  }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    roleList(parent, args) {
      return axios.get(config.jsonServerUrl + '/role')
        .then(res => res.data)
    }
  }
};
