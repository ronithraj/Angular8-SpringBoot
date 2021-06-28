import { Role } from "./role";

export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: Role;
    emailId: string;
    token?: string;
}