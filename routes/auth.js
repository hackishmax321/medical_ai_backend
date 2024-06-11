const router = require("express").Router();
const User = require("../models/User");
const Doctor = require("../models/Doctor");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//LOGIN

router.post("/sign-in", async (req, res) => {
  console.log(req.body);
  let role = 'Patient';
  try {
    // Search in User collection
    let user = await User.findOne({ username: req.body.username });

    // If not found, search in Doctor collection
    if (!user) {
      role = 'Doctor';
      user = await Doctor.findOne({ username: req.body.username });
    }

    // If user is not found in any collection, return an error
    if (!user) {
      return res.status(401).json("Wrong credentials!");
    }

    console.log(user);

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong credentials!");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        role:role,
      },
      process.env.JWT_SEC,
      { expiresIn: "1d" }
    );

    const { password, ...others } = user._doc;

    // Check if headers have already been sent
    if (!res.headersSent) {
      res.status(200).json({ ...others, accessToken, role });
    } else {
      console.log("Headers already sent. Cannot send response.");
    }
  } catch (err) {
    console.log(err);

    // Check if headers have already been sent
    if (!res.headersSent) {
      res.status(500).json(err);
    } else {
      console.log("Headers already sent. Cannot send error response.");
    }
  }
});


router.post("/s", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {expiresIn:"1d"}
    );

    const { password, ...others } = user._doc;

    res.status(200).json({...others, accessToken});
  } catch (err) {
    console.log(err);
    // res.status(500).json(err);
  }
});

module.exports = router;
