import createError from 'http-errors'
import express from 'express'
import path from 'path'
//import logger from 'morgan'
import session from 'express-session'
import mongoSession from 'connect-mongodb-session'
import helmet from 'helmet'

import config from './config.json'


const ConfiguretedMongoSession = mongoSession(session)

/*
const storageSession = new ConfiguretedMongoSession({
    uri: config.database.mongo.url,
    collection: 'usersession'
})
*/
const app = express()

const configuredHelmet = helmet({
    referrerPolicy: {
        policy: 'no-referrer'
    },
    dnsPrefetchControl: {
        allow: false
    },
    frameguard: {
        action: 'sameorigin'
    },
    permittedCrossDomainPolicies: {
        permittedPolicies: 'none'
    },
    contentSecurityPolicy: false,
    hsts: false
}) 


app.use(configuredHelmet)
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, '../static')))
app.use(session({
    secret: config.server.session.secret,
    resave: true,
    saveUninitialized: false,
    //store: storageSession,
    cookie: {
        expires: new Date(604800000)
    }
}))
app.use((req, res, next) => {
    next(createError(404))
})

app.set('port', config.server.port)
/*
app.listen(config.server.port, () => {
    console.log('Servidor aberto na porta: ' + config.server.port)
})
*/
export default app