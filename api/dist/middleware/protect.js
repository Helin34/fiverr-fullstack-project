import jwt from "jsonwebtoken";
import { Forbidden } from "../utils/errors.js";
import { config } from "../config/enviroment.js";
import User from "../models/user.model.js";
const protect = async (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        console.log("🔴 HATA: İstek ile birlikte token çerezi (cookie) gelmedi!");
        return next(new Forbidden("Token bulunamadı"));
    }
    try {
        const payload = jwt.verify(token, config.JWT_SECRET);
        const user = await User.findById(payload.id);
        if (!user) {
            console.log("🔴 HATA: Token geçerli ama bu ID ile eşleşen kullanıcı veritabanında yok!");
            return next(new Forbidden("bu hesap artık kullanım dışı"));
        }
        req.user = user;
        next();
    }
    catch (err) {
        console.log("🔴 HATA: JWT doğrulama başarısız (Secret key yanlış veya token geçersiz):", err);
        return next(new Forbidden("Geçersiz token"));
    }
};
export default protect;
//# sourceMappingURL=protect.js.map