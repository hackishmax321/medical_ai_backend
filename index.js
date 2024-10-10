const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const recordsRoute = require("./routes/Records.route");
const doctorsRoute = require("./routes/Doctor.route");
const patientRoute = require("./routes/Patient.route");
const appointmentRoute = require("./routes/Appointments.route");
const blogRoute = require("./routes/BlogPost.route");
const sessionRoute = require("./routes/Sessions.route");
const storyRoute = require("./routes/Story.route");
const gameRoute = require("./routes/Game.route");
const messagesRoute = require("./routes/Messages.rote");
const docRoute = require("./routes/Documents.route");
const chatRoute = require("./routes/UserChatSessions.route");
const models = require("./routes/model");
const cors = require("cors");

mongoose
  .connect('mongodb+srv://dbuserxxx:vVhjSpBvc18iJ2ev@cluster0.rxfpgzp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/records", recordsRoute);
app.use("/api/appointments", appointmentRoute);
app.use("/api/doctors", doctorsRoute);
app.use("/api/patients", patientRoute);
app.use("/api/models", models);
app.use("/api/sessions", sessionRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/stories", storyRoute);
app.use("/api/games", gameRoute);
app.use("/api/messages", messagesRoute);
app.use("/api/documents", docRoute);
app.use("/api/chats", chatRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
