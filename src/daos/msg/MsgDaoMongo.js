import MongoContainer from "../../persistencia/MongoContainer.js";
import Msg from "../../models/msg-model.js";

class MsgDaoMongo extends MongoContainer {

    constructor() {
        super("messages", Msg);
    };
};

export default MsgDaoMongo;