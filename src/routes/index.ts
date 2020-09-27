import {Express} from 'express'
import Mongo from '../database'


import initial from './initial'

export default (app: Express, db: Mongo): Express => {
    app.use('/', initial(db))

    return app
}