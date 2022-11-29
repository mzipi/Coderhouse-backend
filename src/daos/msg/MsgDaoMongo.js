import MongoContainer from "../../persistencia/MongoContainer.js";

class MsgDaoMongo extends MongoContainer {

    constructor() {
        super("messages");
    };
};

export default MsgDaoMongo;