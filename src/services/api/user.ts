import Base from './base'

export default class User extends Base {
    group = 'user'

    async getList() {
        return this.get<{
            message: string
            data: ProfileApiResponse[]
        }>('list')
    }

    async register( payload: RegisterUserForm ) {
        const data = new FormData();

        data.append('role', payload.role);
        data.append('avatar', payload.avatar);
        data.append('first_name', payload.first_name);
        data.append('last_name', payload.last_name);
        data.append('email', payload.email);
        data.append('password', payload.password);
        data.append('confirm_password', payload.confirm_password);
        data.append('phone', payload.phone);
        data.append('country_code', payload.country_code);
        data.append('date_of_birth', payload.date_of_birth);
        data.append('plan_id', payload.plan_id);
        data.append('blood_group', payload.blood_group);
        data.append('location', payload.location);
        
        return this.post<{
            message: string
            data: ProfileApiResponseWithToken
        }>('register', data)
    }

    async login( payload: LoginUserForm ) {
        const data = new FormData();

        data.append('email', payload.email)
        data.append('password', payload.password)

        return this.post<{
            message: string
            data: ProfileApiResponseWithToken
        }>('login', data)
    }

    async profile( payload?: string | number ) {
        let url = 'profile'
        if (payload) {
            url = `profile/${payload}`
        }

        return this.get<{
            message: string
            data: ProfileApiResponse
        }>(url)
    }
}