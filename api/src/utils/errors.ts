export class BaseError extends Error {
  statusCode;
  errorCode;
  isOperational;
  constructor(message: string, statusCode: number, errorCode: string) {
    super(message);

    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequest extends BaseError {
  constructor(message = "geçersiz/eksik istek") {
    super(message, 400, "BAD_REQUEST");
  }
}
export class Unauthorized extends BaseError {
  constructor(message = "kimlik doğrulanamadı") {
    super(message, 401, "UNAUTHORİZED");
  }
}
export class Forbidden extends BaseError {
  constructor(message = "bu işlem için yetkiniz yok") {
    super(message, 403, "FORBIDDEN");
  }
}
export class NotFound extends BaseError {
  constructor(message = "kaynak bulunamadı") {
    super(message, 404, "NOT_FOUND");
  }
}
