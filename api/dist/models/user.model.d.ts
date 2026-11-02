import mongoose, { Schema } from "mongoose";
declare const User: mongoose.Model<{
    username?: string | null;
    email?: string | null;
    password?: string | null;
    country?: string | null;
    profilePicture: string;
    isSeller: boolean;
    phone?: string | null;
    description?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    username?: string | null;
    email?: string | null;
    password?: string | null;
    country?: string | null;
    profilePicture: string;
    isSeller: boolean;
    phone?: string | null;
    description?: string | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    versionKey: false;
    toJSON: {
        transform: (doc: mongoose.Document<unknown, {}, {
            username?: string | null;
            email?: string | null;
            password?: string | null;
            country?: string | null;
            profilePicture: string;
            isSeller: boolean;
            phone?: string | null;
            description?: string | null;
        }, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<{
            username?: string | null;
            email?: string | null;
            password?: string | null;
            country?: string | null;
            profilePicture: string;
            isSeller: boolean;
            phone?: string | null;
            description?: string | null;
        } & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>, ret: any) => any;
    };
}> & Omit<{
    username?: string | null;
    email?: string | null;
    password?: string | null;
    country?: string | null;
    profilePicture: string;
    isSeller: boolean;
    phone?: string | null;
    description?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    versionKey: false;
    toJSON: {
        transform: (doc: mongoose.Document<unknown, {}, {
            username?: string | null;
            email?: string | null;
            password?: string | null;
            country?: string | null;
            profilePicture: string;
            isSeller: boolean;
            phone?: string | null;
            description?: string | null;
        }, {
            id: string;
        }, mongoose.DefaultSchemaOptions> & Omit<{
            username?: string | null;
            email?: string | null;
            password?: string | null;
            country?: string | null;
            profilePicture: string;
            isSeller: boolean;
            phone?: string | null;
            description?: string | null;
        } & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & mongoose.HydratedDocumentOverrides<{
            id: string;
        }>, ret: any) => any;
    };
}, {
    username?: string | null;
    email?: string | null;
    password?: string | null;
    country?: string | null;
    profilePicture: string;
    isSeller: boolean;
    phone?: string | null;
    description?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    username?: string | null;
    email?: string | null;
    password?: string | null;
    country?: string | null;
    profilePicture: string;
    isSeller: boolean;
    phone?: string | null;
    description?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username?: string | null;
    email?: string | null;
    password?: string | null;
    country?: string | null;
    profilePicture: string;
    isSeller: boolean;
    phone?: string | null;
    description?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    username?: string | null;
    email?: string | null;
    password?: string | null;
    country?: string | null;
    profilePicture: string;
    isSeller: boolean;
    phone?: string | null;
    description?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    username?: string | null;
    email?: string | null;
    password?: string | null;
    country?: string | null;
    profilePicture: string;
    isSeller: boolean;
    phone?: string | null;
    description?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default User;
//# sourceMappingURL=user.model.d.ts.map