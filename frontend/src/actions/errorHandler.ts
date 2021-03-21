/**
 * General error handling method that returns an error message
 */
export const errorHandler = (error: any) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};
