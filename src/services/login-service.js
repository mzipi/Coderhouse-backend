import passport from 'passport';

export default class ServiceLogin {
    constructor() {
        
    }
    auth() {
        passport.authenticate('login',{ failureRedirect: '/login' }),
        (req, res) => { res.redirect('/') }
    }
}