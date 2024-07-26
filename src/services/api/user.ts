import Base from './base'

export default class User extends Base {
    group = 'user'

    async getList() {
        return this.get<{
            message: string
            data: RegisterUserApiResponse[]
        }>('list')
    }

    async register( values: RegisterUserForm ) {
        const data = new FormData();

        data.append('role', values.role);
        data.append('avatar', values.avatar);
        data.append('first_name', values.first_name);
        data.append('last_name', values.last_name);
        data.append('email', values.email);
        data.append('password', values.password);
        data.append('confirm_password', values.confirm_password);
        data.append('phone', values.phone);
        data.append('country_code', values.country_code);
        data.append('date_of_birth', values.date_of_birth);
        data.append('plan_id', values.plan_id);
        data.append('blood_group', values.blood_group);
        data.append('location', values.location);
        
        return this.post<{
            message: string
            data: RegisterUserApiResponse
        }>('register', data)
    }
}