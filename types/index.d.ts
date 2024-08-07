type RoleType = 'admin' | 'editor' | 'member' | 'guest';
type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
type UserStatus = 'active' | 'inactive' | 'pending' | 'blocked';
type Email = `${string}@${string}.${string}`;

interface ImageType {
    uri: string
    type: string,
    name: string,
}

interface RegisterUserForm {
    first_name: string
    last_name: string
    email: Email
    password: string
    confirm_password: string
    phone: string
    country_code: '880'
    date_of_birth: `${string}-${string}-${string}`,
    blood_group: BloodGroup
    location: string,
    avatar: ImageType,
    role: RoleType,
    plan_id: string
}

interface ProfileApiResponseWithToken extends Omit<RegisterUserForm, 'avatar' | 'password' | 'confirm_password'> {
    access_token: string
    avatar: string
    id: number
    is_email_verified: 'yes' | 'no'
    is_phone_verified: 'yes' | 'no'
    username: string
    status: UserStatus
}

type ProfileApiResponse = Omit<ProfileApiResponseWithToken, 'access_token'>;

interface LoginUserForm {
    email: Email
    password: string
}