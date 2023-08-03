import { Role } from "./Role";


export class Customer {
    'userId': number;
    'email': string;
    'username': string;
    'password': string;
    'image': string;
    'address': string;
    'phoneNumber': string;
    'gender': boolean;
    'registerDate': Date;
    'status': boolean;
    'roles': Role[];
    'token': string;

    constructor(id: number,name : string) {
        this.userId = id;
        this.name = name;
    }
}
