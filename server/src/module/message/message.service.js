import MessageRepository from "./message.repository.js";
class MessageService {
    async createMessage(req, res) {
        const payLoad = req.body;
        const result = await MessageRepository.createMessage(payLoad);
        if (!result) {
            res.status(500).send({ status: "error", message: "Something went wrong!" })
        }
        res.status(201).send({ status: "success", data: result });
    }

    async getMessage(req, res) {
        const result = await MessageRepository.findAll();
        res.status(200).send({ status: "success", data: result })
    }

    async getUserMessages(req, res) {
        const { userId, chattingWithId } = req.body;
        const result = await MessageRepository.getUserMessages(userId, chattingWithId);
        if (!result) {
            res.status(404).send({ status: "error", message: "Data not found" })
        }
        res.status(200).send({ status: "success", data: result })

    }
}

export default new MessageService;