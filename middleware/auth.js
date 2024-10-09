export const checkPassword = (req, res, next) => {
  const { password } = req.body; // Expect the password in the request body

  if (password === process.env.SECRET_PASSWORD) {
    next(); // Allow the request to proceed
  } else {
    return res.status(401).json({ message: "Access Denied: Invalid Password" });
  }
};
