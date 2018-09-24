const Role = `
  type Role {
    id: ID!
    code: String!
    name: String!
    enabled: Boolean!
  }
`;

export const types = () => [Role];

export const typeResolvers = {

};