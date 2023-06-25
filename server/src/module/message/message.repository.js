import message from "./message.model.js";
class MessageRepository{
    async createMessage(payLoad){
        const res = await message.create(payLoad);
        return res;
    }
}
export default new MessageRepository;