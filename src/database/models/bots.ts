import {Schema, Document, model} from 'mongoose'

interface IBots extends Document{
    _id: String,
    username: string,
    discriminator: string,
    avatar: string,
    avatarBuffer: {
        data: Buffer,
        contentType: string
    },
    status: string,
    owner: string,
    dates: {
        sent: Date,
        approved: Date
    },
    details: {
        prefix: string,
        tags: string[],
        library: string,
        customInviteLink: string,
        shortDescription: string,
        longDescription: string,
        htmlDescription: string,
        supportServer: string,
        website: string,
        otherOwners: string[],
        customURL: string
    },
    approvedBy: string,
    votes: {
        current: number,
        voteslog: string[]
    },
    count: {
        guild: number
    },
    tokens: {
        current: string
    }

}

const Bots = new Schema({
    _id: String,
    username: String,
    discriminator: String,
    avatar: String,
    avatarBuffer: {
        data: Buffer,
        contentType: String
    },
    status: String,
    owner: {
        ref: "users",
        type: String
    },
    dates: {
        sent: {
            default: Date.now,
            type: Date
        },
        approved: Date
    },
    details: {
        prefix: String,
        tags: Array,
        library: String,
        customInviteLink: String,
        shortDescription: String,
        longDescription: String,
        htmlDescription: String,
        supportServer: String,
        website: String,
        otherOwners: [
            {
                ref: "users",
                type: String
            }
        ],
        customURL: String
    },
    approvedBy: {
        ref: "users",
        type: String
    },
    votes: {
        current: {
            default: 0,
            type: Number
        },
        voteslog: [
            {
                ref: "users",
                type: String
            }
        ]
    },
    count: {
        guild: Number
    },
    tokens: {
        current: String
    }
})

export default model<IBots>('bots', Bots)