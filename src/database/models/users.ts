import {Schema, Document, model} from 'mongoose'

interface IUsers extends Document{
    _id: string,
    username: string,
    discriminator: string,
    avatar: string,
    avatarBuffer: {
        data: Buffer,
        contentType: string
    },
    dates: {
        firstSeen: Date,
        lastBotAdd: Date,
        nextVote: Date
    },
    details: {
        description: string,
        role: number
    }
}

const Users = new Schema({
    _id: String,
    username: String,
    discriminator: String,
    avatar: String,
    avatarBuffer: {
        data: Buffer,
        contentType: String
    },
    dates: {
        firstSeen: {
            default: Date.now,
            type: Date
        },
        lastBotAdd: Date,
        nextVote: Date
    },
    details: {
        description: String,
        role: Number
    }
})

export default model<IUsers>('users', Users)