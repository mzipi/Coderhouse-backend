import MariadbContainer from "../../containers/mariadb_container.js";

class MsgDaoMariaDB extends MariadbContainer {

    constructor() {
        super("cart");
    };
};

export default MsgDaoMariaDB;