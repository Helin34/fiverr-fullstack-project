import type { Request, Response, NextFunction } from "express";
import catchAsync from "../utils/catch-async.js";
import { BadRequest, Unauthorized } from "../utils/errors.js";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import uploadToCloud from "../utils/upload-to-cloud.js";
import jwt from "jsonwebtoken";
import { config, isProduction } from "../config/enviroment.js";

const register = catchAsync(
  async (
    req: Request,
    res: Response,
    next: NewableFunction | NextFunction,
  ): Promise<void> => {
    if (
      req.body.profilePicture &&
      typeof req.body.profilePicture === "object"
    ) {
      delete req.body.profilePicture;
    }

    const hashedPass: string = bcrypt.hashSync(req.body.password, 12);
    let profilePictureUrl = "";

    if (req.file && req.file.path) {
      const image = await uploadToCloud(
        next,
        req.file.path,
        "8-avatars",
        200,
        200,
        "image",
      );
      profilePictureUrl = image.secure_url;
    }

    const newUser = await User.create({
      ...req.body,
      password: hashedPass,
      ...(profilePictureUrl && { profilePicture: profilePictureUrl }),
    });

    res.status(201).json({ message: "Hesabınız oluşturuldu", user: newUser });
  },
);

const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { username, password } = req.body;

    if (!username || !password) {
      return next(new BadRequest("Kullanıcı adı ve şifre zorunludur."));
    }

    const user = await User.findOne({ username }).select("+password");

    if (!user || !user.password) {
      return next(new Unauthorized("giriş bilgileri hatalı"));
    }

    const isPassCorrect = bcrypt.compareSync(password as string, user.password);

    if (!isPassCorrect) {
      return next(new Unauthorized("giriş bilgileri hatalı"));
    }

    const token = jwt.sign(
      { id: user._id, isSeller: user.isSeller },
      config.JWT_SECRET,
      {
        expiresIn: config.JWT_EXPIRES,
      },
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false, // Localhost'ta (HTTP) çalışırken mutlaka false olmalı!
        sameSite: "lax",
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        path: "/",
      })
      .json({ message: "oturum açıldı", user });
  },
);

const logout = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res
      .clearCookie("token", {
        httpOnly: true,
        secure: false, // Login'de secure: false yaptığımız için burada da aynı olmalı
        sameSite: "lax", // Çerezin oluşturulduğu sameSite ayarı
        path: "/",
      })
      .status(200)
      .json({ message: "Oturum kapatıldı" });
  },
);

// DÜZELTİLEN KISIM: Profil isteği atıldığında veritabanından kullanıcıyı bulup dönüyoruz
const profile = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Protect middleware'inin req içine eklediği ID'yi alıyoruz (req.user.id veya req.userId projeye göre değişebilir)
    // Eğer protect middleware'iniz farklı bir alan kullanıyorsa oraya uyarlayabilirsiniz
    const userId = (req as any).user?.id;

    const user = await User.findById(userId);

    if (!user) {
      return next(new Unauthorized("Kullanıcı bulunamadı."));
    }

    res.status(200).json({ message: "işlem başarılı", user });
  },
);

export { register, login, logout, profile };
