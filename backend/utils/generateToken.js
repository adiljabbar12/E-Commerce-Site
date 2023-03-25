import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    //id or Jwt_secret or expiry ky mixture sy JWT Token banta hai
    expiresIn: "30d",
  });
};
export default generateToken;
