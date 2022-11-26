import SqliteContainer from "../../containers/sqlite_container.js";

class MsgDaoSqlite extends SqliteContainer {

    constructor() {
        super("messages");
    };
};

export default MsgDaoSqlite;