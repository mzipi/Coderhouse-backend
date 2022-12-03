import ServiceInfo from '../services/ServiceInfo.js';

const data = new ServiceInfo();

export default function infoController(req, res) {
    res.json(data.info());
}