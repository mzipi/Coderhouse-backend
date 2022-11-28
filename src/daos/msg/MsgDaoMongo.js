import MongoContainer from "../../containers/MongoContainer.js";

class MsgDaoMongo extends MongoContainer {

    constructor() {
        super("messages");
    };
};

export default MsgDaoMongo;