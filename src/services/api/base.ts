import AppMeta from '@src/services/app-meta' 
import storage from '@src/services/storage';

export default abstract class Base {
    apiEndpoint = AppMeta.apiEndpint
    abstract group: string

    async get<T>(url: string): Promise<T> {
        const response = await fetch(`${this.apiEndpoint}/${this.group}/${url}`, {
            headers: {
                Authorization: `Bearer ${storage.getString('token')}`
            }
        });

        if( !response.ok ) {
            throw await response.json()
        }

        return response.json()
    }

    async post<T>(url: string, data: any): Promise<T> {
        const response = await fetch(`${this.apiEndpoint}/${this.group}/${url}`, {
            method: 'POST',
            body: data
        })

        if( !response.ok ) {
            throw await response.json()
        }

        return response.json()
    }
}