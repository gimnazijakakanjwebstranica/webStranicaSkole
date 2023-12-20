import express from "express";
import { Admin } from "../models/adminModel.js";
import { SALTROUNDS, SECRET } from "../config.js";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).send({
        message: "Unesi zadata polja: ime i šifru",
      });
    }

    let hashedPassword = await bcrypt.hash(req.body.password, SALTROUNDS);

    const newAdmin = {
      username: req.body.username,
      password: hashedPassword,
    };

    const admin = await Admin.create(newAdmin);
    return res.status(201).send(admin);
  } catch (err) {
    console.log(err);
    res.send(500).status("Kreiranje admina neuspješno");
  }
});

router.get("/", async (req, res) => {
  try {
    const admini = await Admin.find({});
    return res.status(200).json({
      length: admini.length,
      data: admini,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Problem u fetchanju podataka");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Admin.findByIdAndDelete(id);
    if (!result) res.status(404).send({ message: "Admin nije pronaden" });

    res.status(200).send({ message: "Uspjesno obrisano" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Zahtjev neuspjesan" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username }); // Find user by username

    if (!admin) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the hashed password
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password" });
    }

    const token = jwt.sign({ username: Admin.username }, SECRET, {
      expiresIn: "1h",
    });

    // If username and password are correct, return success
    return res.status(200).send({ message: "Login successful" ,  token});
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server error" });
  }
});


const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send(err);
    }

    // If token is valid, pass the decoded payload to the next middleware/route handler
    req.user = decoded;
    next();
  });
};

// Route for token verification (example endpoint)
router.post('/verify-token', verifyToken, (req, res) => {
  // If the token is valid, the user is authenticated
  res.status(200).json({ message: 'Token is valid', user: req.user, verifyValid:true });
});

export default router;
