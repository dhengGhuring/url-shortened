module.exports = (error, req, res, next) => {
  console.log(req.method);
  if (error === "UNAUTHORIZED") {
    return res.json({ status: "error", message: error.toLowerCase() });
  }
  if (error.code === "ECONNREFUSED") {
    return res
      .status(500)
      .json({ status: "error", message: "server unavailable" });
  }
  if (error.code) {
    return res.status(error.response.status).json({
      status: "error",
      message: error.response.statusText.toLowerCase(),
    });
  }
  if (error.response) {
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
  return res.status(500).json({ status: "error", message: "server error" });
};
