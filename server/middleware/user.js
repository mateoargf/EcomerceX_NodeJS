const passport = require('passport')

const scopeGoogle = async (req, res, next) => {
     await passport.authenticate('google', {
          scope: ['profile']
     })
     next()
}

const authenticateGoogle = async (req, res, next) => {
     await passport.authenticate('google')
     next()
}

module.exports = {
     scopeGoogle,
     authenticateGoogle
}