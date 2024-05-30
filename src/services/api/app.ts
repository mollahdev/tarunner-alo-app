import Base from './base'

export default class App extends Base {
    group = 'app'

    async getMeta() {
        return this.get<{
            message: string,
            data: {
                version: string
                download_link: string
            }
        }>('meta')
    }
}