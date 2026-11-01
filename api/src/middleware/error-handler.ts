import type { ErrorResponse } from "./../types/index.js";
import { isDevelopment } from "../config/enviroment.js";
import { BaseError } from "../utils/errors.js";
import type { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: BaseError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!(err instanceof BaseError)) {
    console.log("bilinmeyen hata", err);

    err = new BaseError(
      "beklenmyen bir hata oluştu ",
      500,
      "INTERNAL_SERVER_ERROR",
    );
  }

  const response: ErrorResponse = {
    status: "error",
    message: err.message,
    code: err.errorCode,
  };
  if (isDevelopment) {
    response.stack = err.stack as string;
  }

  res.status(err.statusCode).json(response);
};

export default errorHandler;
