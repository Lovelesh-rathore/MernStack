import User from "../models/userModels.js";

export const userRegister = async (req, res) => {
  try {
    const { firstName, LastName, email, phone, address, password } = req.body;

    if (!firstName || !LastName || !email || !phone || !address || !password) {
      console.log("All fields required");
      res.status(400).json({ message: "All fields required" });
      return;
    }

    const existingUser = await User.findone({ email });

    if (existingUser) {
      console.log("User already exists");
      res.status(409).json({ message: "User already exists" });
      return;
    }

    const newUser = await User.create({
      firstName,
      LastName,
      email,
      phone,
      address,
      password,
    });

    console.log(newUser);
    res.status(200).json({ message: "User registered succesfully" });
  } catch (error) {}
};

export const userLogin = (req, res) => {
  res.json({ message: "User Logged In Succesfully" });
};

export const userLogout = (req, res) => {
  res.json({ message: "User Logged Out Succesfully" });
};
