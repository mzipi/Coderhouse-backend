import { fork } from 'child_process';

class ServiceRandom {
    
    process(req, res) {

        let cant = Number(req.query.cant) || 100000;

        const child = fork('./src/api/child.js');

        child.send(cant);

        child.on('message', msg => res.send({ num: msg }));
    }
}

export default ServiceRandom;