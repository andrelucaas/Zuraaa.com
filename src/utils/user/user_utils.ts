import IUser from './iuser'

class UserUtils {
    static userToString(user: IUser): string{
        return `${user.username}#${user.discriminator}`
    }

    static avatarUrl(user: IUser): string {
        if(!user.avatar){
            const defaultNumber = parseInt(user.discriminator) % 5
            return `https://cdn.discordapp.com/embed/avatars/${defaultNumber}.png`;
        }

        let end = ''
        if(user.avatar.startsWith('a_'))
            end = 'gif'
        else
            end = 'webp?size=1024'
        return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${end}`
    }
}

export default UserUtils