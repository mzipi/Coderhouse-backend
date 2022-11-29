import FirebaseContainer from "../../persistencia/FirebaseContainer.js";

class MsgDaoFirebase extends FirebaseContainer {

    constructor() {
        super("messages")
    };
};

export default MsgDaoFirebase;