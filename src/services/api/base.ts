import AppMeta from '@src/services/app-meta' 

export default abstract class Base {
    apiEndpoint = AppMeta.apiEndpint
    abstract group: string

    async get<T>(url: string): Promise<T> {
        const response = await fetch(`${this.apiEndpoint}/${this.group}/${url}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-type':'application/json'
            },
        })

        return response.json()
    }
}