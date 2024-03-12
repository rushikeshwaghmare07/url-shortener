const User = require("../models/user.model.js");
const { setUser } = require("../service/auth.service.js");

// Signup
async function handleUserSignup(req, res) {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({
      name,
      email,
      password,
    });

    return res.redirect("/");
  } catch (error) {
    console.error("Error signing up user:", error);
    return res.status(500).send("Internal Server Error");
  }
}

// Login
async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.render("login", {
        error: "Invalid email or password. Please try again.",
      });
    }

    const token = setUser(user);
    res.cookie("token", token);
    return res.redirect("/");

  } catch (error) {
    console.error("Error logging in user:", error);
    return res
      .status(500)
      .send("Oops! Something went wrong. Please try again later.");
  }
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
