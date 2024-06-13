import Express from "express";
import cors from "cors";
import mongoose from "mongoose";


const app = Express();
app.use(cors());
app.use(Express.json());
import "./db.js";
import { userSchema } from "./src/model/user.models.js";
const Users = mongoose.model("data", userSchema);

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;
    const user = new Users({
        name,
        email,
        message,
    });
    await user.save();
    console.log(user);
    res.json({ message: "Data Saved", ok: true });
});

const port = process.env.PORT || 8000; 
app.listen(port, () => {
    console.log(`Server is running at PORT: ${port}`);
});

//{
// import express from "express";
// import mongoose from "mongoose";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import { userSchema } from "./src/model/user.models.js";
// import dotenv from "dotenv";
// import cors from "cors";app.use(cors());
// import bodyParser from "body-parser";

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "../src/components/Contact/")));

// const Users = mongoose.model("data", userSchema);

// app.get("/", (req, res) => {
//   res.send(__dirname + "../src/components/Contact/Contact.jsx");
// });

// console.log('MONGODB_URI:', process.env.MONGODB_URI); // Debug line

// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Could not connect to MongoDB", err));

// app.post("/contact", async (req, res) => {
//   const { name, email, message } = req.body;
//   const user = new Users({
//     name,
//     email,
//     message,
//   });
//   await user.save();
//   console.log(user);
//   res.send("Data Saved");
// });

// app.listen(process.env.PORT || 5173, () => {
//   console.log(`server is running at PORT : ${process.env.PORT || 5173}`);
// });


// import Express from "express";
// const app = Express();
// import cors from "cors";app.use(cors());
// import mongoose from "mongoose";
// app.use(Express.json());
// import "./db.js";
// import { userSchema } from "./src/model/user.models.js";
// const Users = mongoose.model("data", userSchema);

// app.post("/contact", async (req, res) => {
//     const { name, email, message } = req.body;
//     const user = new Users({
//         name,
//         email,
//         message,
//     });
//     await user.save();
//     console.log(user);
//     res.json({ message: "Data Saved", ok: true }); 

// });app.post("/contact", async (req, res) => {
//   const { name, email, message } = req.body;
//   const user = new Users({
//       name,
//       email,
//       message,
//   });
//   await user.save();
//   console.log(user);
//   res.json({ message: "Data Saved", ok: true }); // Send a JSON response
// });

//    app.listen(process.env.PORT || 5173, () => { 
//       console.log(`Server is running at PORT : ${process.env.PORT || 5173}`);
//     });
//}