export default function missingRoutesService(req) {
    return {
        'url': req.originalUrl,
        'method': req.method,
        'status-code': '404'
    };
};