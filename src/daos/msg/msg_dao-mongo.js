import MongoContainer from "../../containers/mongo_container.js";

class MsgDaoMongoDB extends MongoContainer {

    constructor() {
        super("cart");
    };
};

export default MsgDaoMongoDB;