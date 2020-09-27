import {connect} from 'mongoose'
import config from '../config.json'

import bots from './models/bots'
import users from './models/users'

class Mongo{
    public bots = bots
    public users = users
    
    
    constructor(){
        connect(config.database.mongo.url, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        })
    }
}


export default Mongo