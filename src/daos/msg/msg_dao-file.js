import FileContainer from "../../containers/file_container.js";

class MsgDaoArchivo extends FileContainer {

    constructor(rutaDir) {
        super(`${rutaDir}/cart.json`);
    };
};

export default MsgDaoArchivo;