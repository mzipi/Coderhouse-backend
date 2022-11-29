import FileContainer from "../../persistencia/FileContainer.js";

class MsgDaoArchivo extends FileContainer {

    constructor(rutaDir) {
        super(`${rutaDir}/msgs.json`);
    };
};

export default MsgDaoArchivo;