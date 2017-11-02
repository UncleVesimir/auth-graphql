const graphql = require('graphql');
const { 
  GraphQLObjectType,
  GraphQLID
 } = graphql;
 const UserType = require('./UserType');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    user: {
      type: UserType,
      resolve(parentValue, args, req){
        return req.user; // passport will push user information to req.user if the user successfully logs in.
        // if not, req.user == null. both cases can be checked for clientside. (Is this safe??)
      }
    }
  }
});

module.exports = RootQueryType;
