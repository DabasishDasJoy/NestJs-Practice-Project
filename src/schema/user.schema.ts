import { Prop, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document & { _id: string };

export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);