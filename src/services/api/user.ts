import Base from './base'

export default class User extends Base {
    group = 'user'

    async getList() {
        return this.get('list')
    }
}