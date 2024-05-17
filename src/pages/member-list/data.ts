export interface Member {
    id: number;
    name: string;
    email: string;
    phone: string;
    blood: string;
    profile: any;
    date_of_birth: string;
    ward: number;
    holding: number;
    village: string;
}

const Data = [
    {
        id: 1,
        name: 'Md. Ashraful Mollah',
        email: 'example+1@gmail.com',
        phone: '8801742793777',
        blood: 'A+',
        profile: require('@assets/images/profile.png'),
        date_of_birth: '12-1-1996',
        ward: 3,
        holding: 143,
        village: 'Aladipur'
    },
    {
        id: 2,
        name: 'Mizanur Rahman',
        email: 'example+1@gmail.com',
        phone: '8801742793777',
        blood: 'B+',
        profile: require('@assets/images/profile.png'),
        date_of_birth: '12-1-1996',
        ward: 3,
        holding: 143,
        village: 'Aladipur'
    },
    {
        id: 3,
        name: 'Akash Saha',
        email: 'example+1@gmail.com',
        phone: '8801742793777',
        blood: 'O+',
        profile: require('@assets/images/profile.png'),
        date_of_birth: '12-1-1996',
        ward: 3,
        holding: 143,
        village: 'Aladipur'
    },
    {
        id: 4,
        name: 'Md Faisal Ahmed',
        email: 'example+1@gmail.com',
        phone: '8801742793777',
        blood: 'AB+',
        profile: require('@assets/images/profile.png'),
        date_of_birth: '12-1-1996',
        ward: 3,
        holding: 143,
        village: 'Aladipur'
    },
    {
        id: 5,
        name: 'Nayeem Ahmed',
        email: 'example+1@gmail.com',
        phone: '8801742793777',
        blood: 'A+',
        profile: require('@assets/images/profile.png'),
        date_of_birth: '12-1-1996',
        ward: 3,
        holding: 143,
        village: 'Aladipur'
    },
    {
        id: 6,
        name: 'Hassan Mahmud',
        email: 'example+1@gmail.com',
        phone: '8801742793777',
        blood: 'B+',
        profile: require('@assets/images/profile.png'),
        date_of_birth: '12-1-1996',
        ward: 3,
        holding: 143,
        village: 'Aladipur'
    },
    {
        id: 7,
        name: 'Kawsar Ahmed',
        email: 'example+1@gmail.com',
        phone: '8801742793777',
        blood: 'O+',
        profile: require('@assets/images/profile.png'),
        date_of_birth: '12-1-1996',
        ward: 3,
        holding: 143,
        village: 'Aladipur'
    },
    {
        id: 8,
        name: 'Mohammad Hasan',
        email: 'example+1@gmail.com',
        phone: '8801742793777',
        blood: 'AB+',
        profile: require('@assets/images/profile.png'),
        date_of_birth: '12-1-1996',
        ward: 3,
        holding: 143,
        village: 'Aladipur'
    },
]

export default Data;