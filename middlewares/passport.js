import passport from 'passport';
import Strategy from 'passport-local';

passport.use('registro', new Strategy(
    {
        passReqToCallback: true,
        // usernameField: 'email',
        // passwordField: 'contrasenia',
    },
    function(req, username, password, done) {
        try {
            // const usuario = registrarUsuario(req.body);
            if (req.body.user) {
                req.session.name = req.body.user;
                usuario = req.session.name;
            }
            done(null, usuario);
        } catch (error) {
            done(null, false, error);
        }
    }
));

passport.use('login', new Strategy(
    (username, password, done) => {
        try {
            // const usuario = autenticar(username, password);
            if (req.body.user) {
                req.session.name = req.body.user;
                usuario = req.session.name;
            }
            done(null, usuario);
        } catch (error) {
            done(null, false, error);
        }
    }
));

export const passportMiddleware = passport.initialize();