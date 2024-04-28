type RoleType = 'admin' | 'editor' | 'member' | 'guest';

interface UserInterface {
    first_name: string;
    last_name: string;
    primary_phone: string;
    secondary_phone: string | null;
    date_of_birth: string;
    avatar: string | null;
    email: `${string}@${string}.${string}` | null;
    role: RoleType;
    blood_group: string;
    status: 'active' | 'inactive' | 'pending' | 'blocked';
    id: string;
}