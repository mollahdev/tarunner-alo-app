import * as Yup from 'yup';
import { string } from 'yup';

export const loginSchema = Yup.object().shape({
    email: string().email('Invalid email address').required('Email required'),
    password: string().required('Password required').min(6, 'Invalid password'),
});