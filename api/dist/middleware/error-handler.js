import { isDevelopment } from "../config/enviroment.js";
import { BaseError } from "../utils/errors.js";
const errorHandler = (err, req, res, next) => {
    if (!(err instanceof BaseError)) {
        console.log("bilinmeyen hata", err);
        err = new BaseError("beklenmyen bir hata oluştu ", 500, "INTERNAL_SERVER_ERROR");
    }
    const response = {
        status: "error",
        message: err.message,
        code: err.errorCode,
    };
    if (isDevelopment) {
        response.stack = err.stack;
    }
    res.status(err.statusCode).json(response);
};
export default errorHandler;
//# sourceMappingURL=error-handler.js.map