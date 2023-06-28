import AuthRepository from "./auth.repository.js";
import UserRepository from "../user/user.repository.js";
class AuthService {
    async signIn(req, res) {
        const payLoad = req.body;
        console.log(payLoad);
        const user = await UserRepository.findOneWithEmail(payLoad.email);
        if(!user){
            user = await UserRepository.createUser(payLoad);
        }
        
        
    }
}

export default new AuthService;