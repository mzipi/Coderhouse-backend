import MongoContainer from "../../containers/MongoContainer.js";

class MsgDaoMongoDB extends MongoContainer {

    constructor() {
        super("messages");
    };
};

export default MsgDaoMongoDB;