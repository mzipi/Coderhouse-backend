import ServiceRandom from "../services/ServiceRandom.js"

const child = new ServiceRandom();

async function randomController(req, res) {
    child.process(req,res);
}

export default randomController;