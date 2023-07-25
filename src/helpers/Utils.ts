import { v4 as uuidv4 } from 'uuid';

export class Utils {
    static getUniqueId(): string {
        const id = uuidv4()
        return id;
    }
}