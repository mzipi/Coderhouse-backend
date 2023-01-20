export default function userProtectedController(req, res) {
    res.json({ user: req.user });
}