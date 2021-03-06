const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const UserType = require('./types/UserType');
const AuthService = require('../services/auth')

//sign-in, log-in, log-out mutations required.

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields:{
    signup: {
      type: UserType,
      args:{
        email: {type: GraphQLString},
        password: {type: GraphQLString}
      },
      resolve(parentValue, {email, password}, req){
      
        //request parameter is the request object from express!
        return AuthService.signup({email, password, req})

      }
    },
    login: {
      type: UserType,
      args:{
        email: {type: GraphQLString},
        password: {type: GraphQLString}
      },
      resolve(parentValue, {email, password}, req){
      
        //request parameter is the request object from express!
        return AuthService.login({email, password, req})

      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req){
        return AuthService.logout(req);
      }
    },

  }
});

module.exports = mutation;