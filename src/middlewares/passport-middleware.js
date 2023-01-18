import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
// import { genSalt, hash, compare } from 'bcrypt';
// import User from '../../models/user-model.js';

const passportMiddleware = passport.initialize();
const passportSessionHandler = passport.session();

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new Strategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));





// import { genSalt, hash, compare } from 'bcrypt';
// import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';
// import User from '../../models/user-model.js';
// import { infoLog, errorLog } from '../logger.js';

// const passportMiddleware = passport.initialize();
// const passportSessionHandler = passport.session();

// passport.use('signup', new LocalStrategy({ passReqToCallback: true },
//     async (req, username, password, done) => {
        
//         let user;
        
//         try {
//             user = await User.findOne({ 'username': username })
//         } catch (err) {
//             errorLog.error('Error en el registro');
//             return done(err);
//         }

//         if (user) {
//             infoLog.info('Usuario existente');
//             return done(null, false)
//         }

//         const newUser = {
//             email: username,
//             password: await createHash(password),
//             name: req.body.name,
//             address: req.body.address,
//             age: req.body.age,
//             phone: req.body.phone,
//             image: req.body.image
//         }

//         let userWithId;

//         try {
//             userWithId = await User.create(newUser);
//         } catch (err) {
//             logger.error('Error guardando usuario');
//             return done(err);
//         }

//         infoLog.info('Registro de usuario exitoso');
//         return done(null, userWithId);
//     }
// ));

// passport.use('login', new LocalStrategy(
//     async (username, password, done) => {
        
//         let user;

//         try {
//             user = await User.findOne({ username })
//         } catch (error) {
//             return done(err);
//         }

//         if (!user) {
//             infoLog.info('Usuario no encontrado: ' + username);
//             return done(null, false);
//         }

//         if (!await isValidPassword(user, password)) {
//             infoLog.info('Contraseña incorrecta');
//             return done(null, false);
//         }

//         infoLog.info('Inicio de sesión correcto');
//         return done(null, user);
//     }
// ));

// passport.serializeUser((user, done) => {
//     done(null, user._id);
// });
  
// passport.deserializeUser((id, done) => {
//     User.findById(id, done);
// });

// async function createHash(password) {
//     const salt = await genSalt(10);
//     return await hash(password, salt);
// }
  
// async function isValidPassword(user, password) {
//     return await compare(password, user.password);
// }

// export { 
//     passportMiddleware, 
//     passportSessionHandler
// };