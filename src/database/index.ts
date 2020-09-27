import {connect} from 'mongoose'
import config from '../config.json'

import bots from './models/bots'
import users from './models/users'

export default () => {
    connect(config.database.mongo.url, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })

    return {
        bots: bots,
        users: users
    }
}