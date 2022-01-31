const passport = require('passport')
const passportJWT = require('passport-jwt')
const config = require('./config')
const ExtractJwt = passportJWT.ExtractJwt

module.exports = (knex) => {
    const strategy = new passportJWT.Strategy(
        {
            secretOrKey: config.jwtSecret,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        },
        async (payload, done) => {
            let user = await knex
                .select('*')
                .from('users')
                .where({
                    id: payload.id
                })
            if (user.length == 0) {
                return done(new Error('User not found'), null)
            } else {
                return done(null, user)
            }
        }
    )
    passport.use(strategy)

    return {
        initialize: function () {
            return passport.initialize()
        },
        authenticate: function () {
            return passport.authenticate('jwt', config.jwtSession)
        }
    }
}
