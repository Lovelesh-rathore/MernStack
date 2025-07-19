import ContactMessage from "../models/contactMessage.js";
import Job from "../models/jobModel.js";

export const getAllJobs = async (req, res, next) => {
  try {
    const Jobs = await Job.find();

    res.status(200).json({ message: "All Jobs Fetched", data: Jobs });
  } catch (error) {
    next(error);
  }
};

export const submitContactForm = async (req, res, next) => {
  try {
    const { name, subject, email, message } = req.body;

    if (!name || !subject || !email || !message) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const newMessage = await ContactMessage.create({
      name,
      subject,
      email,
      message,
    });

    res.status(200).json({ message: "Contact form submiitted successfully" });
  } catch (error) {
    next(error);
  }
};
