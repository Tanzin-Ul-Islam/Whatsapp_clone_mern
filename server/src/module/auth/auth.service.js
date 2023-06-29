import AuthRepository from "./auth.repository.js";
import UserRepository from "../user/user.repository.js";
import JwtService from "../jwt/jwt.service.js";
class AuthService {
    async signIn(req, res) {
        const payLoad = req.body;
        let user = await UserRepository.findOneWithEmail(payLoad.email);
        if (!user) {
            user = await UserRepository.createUser(payLoad);
        }

        //generate jwt token
        const jwtPayload = {
            id: user._id,
            email: user.email,
        }

        const accessToken = JwtService.generateToken(jwtPayload);

        res.status(200).send({ status: 'success', msg: "Successfully logged in.", accessToken: accessToken, user: user });


    }
}

export default new AuthService;