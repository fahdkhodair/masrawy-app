


export const errorhandling = ({ res, status = 500, error, stack }) => {
  if (!res) {
    throw new Error("Missing response object (res) in errorhandling");
  }

  return res.status(status).json({
    success: false,
    message: error?.message || "Internal Server Error",
    stack,
  });
};

export const successResponse = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};





export const errorResponse = (res, { status = 500, message, error }) => {
    return res.status(status).json({
        success: false,
        message,
        error: error || null
    });
};

 export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}