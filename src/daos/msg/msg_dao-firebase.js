import FirebaseContainer from "../../containers/firebase_container.js";

class MsgDaoFirebase extends FirebaseContainer {

    constructor() {
        super("messages")
    };
};

export default MsgDaoFirebase;