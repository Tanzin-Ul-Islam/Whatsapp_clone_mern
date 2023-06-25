import MessageRepository from "./message.repository.js";
class MessageService{
    async createMessage(req, res){
        const payLoad = req.body;
        const result = await MessageRepository.createMessage(payLoad);
        if(!result){
            res.status(500).send({status: "error", message: "Something went wrong!"})
        }
        res.status(201).send({status: "success", data: result});
    }
}

export default new MessageService;