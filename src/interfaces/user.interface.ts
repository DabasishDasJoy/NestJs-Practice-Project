export interface IUserKey {
    id: string
}
export interface IUser extends IUserKey {
    name: string;
    email: string;
    phone: string;
    password?: string;
}