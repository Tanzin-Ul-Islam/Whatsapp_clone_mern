import user from "./user.model.js";
class UserRepository{
    async createUser(payLoad){
        const res = await user.create(payLoad);
        return res;
    }

    async findAll(){
        const res = await user.find({});
        return res;
    }

    async findOneWithEmail(email){
        const res = await user.findOne({
            email: email,
        })
        return res;
    }
}
export default new UserRepository;