import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generatingToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

// USER REGISTERTAION
export const register = async (req, res) => {
  const { email, username, password, photo } = req.body;
  try {
    //  Hashing Password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      username,
      password: hash,
      photo,
    });

    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: "User Successfully created" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server error, Try again" });
  }
};

export const login = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    // If user exists or not
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //  Compare Password
    const isPasswordMatched = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatched) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credentials" });
    }

    // create jwt token
    const token = generatingToken(user);

    const { password, role, ...rest } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({ token, role, message: "Login Successfully", data: { ...rest }, role });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to login" });
  }
};
