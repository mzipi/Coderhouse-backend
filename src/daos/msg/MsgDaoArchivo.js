import FileContainer from "../../containers/FileContainer.js";

class MsgDaoArchivo extends FileContainer {

    constructor(rutaDir) {
        super(`${rutaDir}/msgs.json`);
    };
};

export default MsgDaoArchivo;