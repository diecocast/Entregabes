import { usersService } from "../src/services/services.js";
const resolvers = {
    Query: {
        hello: () => 'Hola mundo',
        getAllUsers: async() =>{
            let users = await usersService.get();
            return users
        }
    }
    
}

export default resolvers;
