import mongoose, { model, Schema } from "mongoose";
const userSchema = new Schema({
    username: {
        type: String,
        unique: [true, "bu kullanıcı ismi zaten kullanımda"],
        require: [true, "lütfen username alanını belirleyin"],
    },
    email: {
        type: String,
        unique: [true, "bu email adresi zaten kullanımda"],
        require: [true, "lütfen email alanını belirleyin"],
    },
    password: {
        type: String,
        require: [true, "lütfen password alanını belirleyin"],
    },
    country: {
        type: String,
        require: [true, "lütfen country alanını belirleyin"],
    },
    profilePicture: {
        type: String,
        default: "default",
    },
    isSeller: {
        type: Boolean,
        default: false,
    },
    phone: {
        type: String,
    },
    description: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            return ret;
        },
    },
});
const User = model("User", userSchema);
export default User;
//# sourceMappingURL=user.model.js.map