import {Express} from 'express'

import mongo from '../database'


export default (app: Express): Express => {
    app.get('/', async (req, res) => {
        const db = mongo()

        res.send(await db.users.findById('268526982222970880').exec())
    })

    return app
}