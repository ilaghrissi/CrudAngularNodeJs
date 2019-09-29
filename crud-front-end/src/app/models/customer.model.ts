export class Customer {
    _id: string;
    firstname: string;
    lastname: string;
    birthday: {
        day: number,
        month: number,
        year: number
    };
    address: {
        region: string,
        city: string,
        country: string,
        postalCode: string
    };
    phone: string;
    email: string;
    active: boolean;
    createdAt: Date;
}
