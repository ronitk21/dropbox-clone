import { apiError } from "../utils/ApiError";

export default function errorHandler(err, req, res, next) {
  if (err instanceof apiError) {
    return res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
      errors: err.errors,
      data: err.data,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
    errors: [err.message || "Unexpected error"],
  });
}
