import {} from "../types/index.js";
import catchAsync from "../utils/catch-async.js";
import { Forbidden, NotFound } from "../utils/errors.js";
import upload from "../utils/multer.js";
import uploadToCloud from "../utils/upload-to-cloud.js";
import { Gig } from "../models/gig.model.js";
const buildFilters = (query) => {
    const filters = {};
    if (query.category)
        filters.category = query.category;
    if (query.userId)
        filters.user = query.userId;
    if (query.min || query.max) {
        filters.packagePrice = {};
        if (query.min)
            filters.packagePrice.$gte = Number(query.min);
        if (query.max)
            filters.packagePrice.$lte = Number(query.max);
    }
    if (query.search)
        filters.title = { $regex: query.search, $options: "i" };
    return filters;
};
export const getAllGigs = catchAsync(async (req, res, next) => {
    const filters = buildFilters(req.query);
    const gigs = await Gig.find(filters);
    res.status(200).json({ message: "hizmetler listelendi", data: gigs });
});
export const getOneGigs = catchAsync(async (req, res, next) => {
    const gig = await Gig.findById(req.params.id).populate("user");
    if (!gig)
        return next(new NotFound());
    res.status(200).json({ message: "başarılı", data: gig });
});
export const createGig = catchAsync(async (req, res, next) => {
    if (!req.user?.isSeller)
        return next(new Forbidden());
    // req.files nesne olarak geleceği için tiplendirmeyi ve okumayı buna göre güncelliyoruz:
    const files = req.files;
    // Kapak resmi kontrolü
    if (!files || !files.coverImage || !files.coverImage[0]?.path) {
        return next(new Forbidden("Lütfen en az bir kapak resmi yükleyin."));
    }
    // 1. Kapak resmini yükle
    const coverImage = await uploadToCloud(next, files.coverImage[0].path, "8-gig", 900, 600, "image");
    // 2. Diğer resimleri (images) yükle
    const promises = files.images
        ? files.images.map((image) => uploadToCloud(next, image.path, "8-gig", 900, 600, "image"))
        : [];
    const images = await Promise.all(promises);
    req.body.coverImage = coverImage.secure_url;
    req.body.images = images.map((img) => img.secure_url);
    if (typeof req.body.packageFeatures === "string") {
        req.body.packageFeatures = req.body.packageFeatures.split(",");
    }
    const savedGig = await Gig.create({ ...req.body, user: req.user._id });
    res
        .status(201)
        .json({ message: "Hizmet başarıyla oluşturuldu ", data: savedGig });
});
export const deleteGig = catchAsync(async (req, res, next) => {
    const gig = await Gig.findById(req.params.id);
    if (!gig)
        return next(new NotFound());
    if (String(gig.user) !== String(req.user._id))
        return next(new Forbidden());
    await Gig.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "başarılı" });
});
//# sourceMappingURL=gig.controller.js.map