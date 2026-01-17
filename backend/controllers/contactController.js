const Contact = require("../models/Contact");

const submitContact = async (req, res) => {
    console.log("BODY:", req.body);
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Contact.create({ name, email, message });

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = submitContact;
