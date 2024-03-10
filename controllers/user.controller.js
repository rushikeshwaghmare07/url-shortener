const User = require("../models/user.model.js");

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

module.exports = {
  handleUserSignup,
};
