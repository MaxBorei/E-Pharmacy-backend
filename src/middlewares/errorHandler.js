export const errorHandler = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      status: 400,
      message: 'Invalid JSON format',
    });
  }

  const status = err.status || 500;

  const response = {
    status,
    message: err.message || 'Something went wrong',
  };

  if (err.name === 'ValidationError') {
    response.status = 400;
    response.message = 'Validation failed';
    response.errors = Object.values(err.errors).map((e) => e.message);
  }

  res.status(response.status).json(response);
};
