import * as Yup from 'yup';
import { ref, string } from 'yup';

export const registerSchema = Yup.object().shape({
    first_name: string().required('First name required'),
    last_name: string().required('Last name required'),
    email: string().email('Invalid email address').required('Email required'),
    password: string().required('Password required').min(6, 'Password must be at least 6 characters'),
    confirm_password: string().when('password', (password, field) =>
        password ? field.required('Password required').oneOf([ref('password')], 'Must match with password') : field
    ),
    phone: string().required('Phone required, start without 0').max(10, 'Invalid! Use maximum 10 digits').min(10, 'Invalid! Use minimum 10 digits'),
    date_of_birth: string().required('Birth date required'),
    blood_group: string().required('Blood group required'),
    location: string().required('Location required'),
    avatar: string().required('Profile photo required'),
});