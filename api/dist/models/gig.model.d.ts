import { Schema } from "mongoose";
export declare const Gig: import("mongoose").Model<{
    user: import("mongoose").Types.ObjectId;
    title: string;
    description: string;
    reviewCount: number;
    starCount: number;
    category: string;
    coverImage: string;
    images: string[];
    packageTitle: string;
    packageDescription: string;
    packagePrice: number;
    packageFeatures: string[];
    packageDuration: number;
    packageRevision: number;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    user: import("mongoose").Types.ObjectId;
    title: string;
    description: string;
    reviewCount: number;
    starCount: number;
    category: string;
    coverImage: string;
    images: string[];
    packageTitle: string;
    packageDescription: string;
    packagePrice: number;
    packageFeatures: string[];
    packageDuration: number;
    packageRevision: number;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    versionKey: false;
    timestamps: true;
    toJSON: {
        transform: (doc: any, ret: any) => any;
    };
}> & Omit<{
    user: import("mongoose").Types.ObjectId;
    title: string;
    description: string;
    reviewCount: number;
    starCount: number;
    category: string;
    coverImage: string;
    images: string[];
    packageTitle: string;
    packageDescription: string;
    packagePrice: number;
    packageFeatures: string[];
    packageDuration: number;
    packageRevision: number;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    versionKey: false;
    timestamps: true;
    toJSON: {
        transform: (doc: any, ret: any) => any;
    };
}, {
    user: import("mongoose").Types.ObjectId;
    title: string;
    description: string;
    reviewCount: number;
    starCount: number;
    category: string;
    coverImage: string;
    images: string[];
    packageTitle: string;
    packageDescription: string;
    packagePrice: number;
    packageFeatures: string[];
    packageDuration: number;
    packageRevision: number;
} & import("mongoose").DefaultTimestampProps, any, unknown, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    user: import("mongoose").Types.ObjectId;
    title: string;
    description: string;
    reviewCount: number;
    starCount: number;
    category: string;
    coverImage: string;
    images: string[];
    packageTitle: string;
    packageDescription: string;
    packagePrice: number;
    packageFeatures: string[];
    packageDuration: number;
    packageRevision: number;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    user: import("mongoose").Types.ObjectId;
    title: string;
    description: string;
    reviewCount: number;
    starCount: number;
    category: string;
    coverImage: string;
    images: string[];
    packageTitle: string;
    packageDescription: string;
    packagePrice: number;
    packageFeatures: string[];
    packageDuration: number;
    packageRevision: number;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=gig.model.d.ts.map