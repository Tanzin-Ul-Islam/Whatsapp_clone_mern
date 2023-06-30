import message from "./message.model.js";
class MessageRepository {
    async createMessage(payLoad) {
        const res = await message.create(payLoad);
        return res;
    }

    async findAll() {
        const res = await message.find({});
        return res;
    }

    async findMessageById(id) {
        const res = await message.findById({ _id: id }).populate('senderId').populate('recieverId');
        return res;
    }

    async getUserMessages(userId, chattingWithId) {
        const res = await message.find({
            $or: [
                { senderId: userId, recieverId: chattingWithId },
                { senderId: chattingWithId, recieverId: userId }
            ]
        }).populate('senderId').populate('recieverId')
        return res;
    }
}
export default new MessageRepository;