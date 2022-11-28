import FirebaseContainer from "../../containers/FirebaseContainer.js";

class MsgDaoFirebase extends FirebaseContainer {

    constructor() {
        super("messages")
    };
};

export default MsgDaoFirebase;