import axios from 'axios'

// Config
import config from '../../../config';

const Role = `
  type Role {
    id: ID!
    code: String!
    name: String!
    enabled: Boolean!
    users: [User]
    permissions: [PermissionAssigned]
  }
`;

export const types = () => [Role];

export const typeResolvers = {
  Role: {
    users(parent, args) {
      return axios.get(config.jsonServerUrl + '/role/' + parent.id + '/user')
        .then(res => res.data)  
    },
    permissions(parent, args) {
      return axios.get(config.jsonServerUrl + '/permissions-assigned?roleId=' + parent.id)
      .then(res => {
        var permissions
        res.data.forEach(async (value, key) => {
          const permission = await axios.get(config.jsonServerUrl + '/permission/' + value.permissionId)
          console.log(await permission.json)
        })
        return permissions
      }) 
    }
  }
};