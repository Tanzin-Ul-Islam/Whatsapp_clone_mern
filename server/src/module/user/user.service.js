import UserRepository from "./user.repository.js";
class UserService {
    async getAllUser(req, res) {
        const result = await UserRepository.findAll();
        res.status(200).send({status: "success", data: result})
    }
}

export default new UserService;