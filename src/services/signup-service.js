import passport from 'passport';

export default class ServiceSignup {
    postSignup() {
        passport.authenticate('signup', { failureRedirect: '/login' }), (req, res) => {res.redirect('/')}
    }
}