import axios from 'axios'

// Config
import config from '../../../config';

const PermissionAssigned = `
  type PermissionAssigned {
    roleId: ID!
    permissionId: ID!
  }
`;

export const types = () => [PermissionAssigned];

export const typeResolvers = {
};