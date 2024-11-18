export const setSuccess = (data, res) => {
    res.status(200).json({
        success: true,
        data: data,
    });
};
  
export const setError = (error, res) => {
    res.status(500).json({
        success: false,
        code: "ServerError",
        message: error.message,
    });
};  