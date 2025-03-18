import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "virat.kohli@example.com",
    fullName: "Virat Kohli",
    password: "123456",
    profilePic: "https://images.app.goo.gl/LiyLG562EXp5sbD78",
  },
  {
    email: "lionel.messi@example.com",
    fullName: "Lionel Andrés Messi",
    password: "123456",
    profilePic: "https://images.app.goo.gl/V7Xs6FtZ71MoxqmC9",
  },
  {
    email: "ronaldo7@example.com",
    fullName: "Cristiano Ronaldo dos Santos",
    password: "123456",
    profilePic: "https://images.app.goo.gl/zQY4o9x5JDxwxroN6",
  },
  {
    email: "ava.wilson@example.com",
    fullName: "Ava Wilson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "Sachin10@example.com",
    fullName: "Sachin Ramesh Tendulkar",
    password: "123456",
    profilePic: "https://images.app.goo.gl/VTX9eZEk9WbSXf859",
  },
  {
    email: "mia.johnson@example.com",
    fullName: "Mia Johnson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "MSDhoni07@example.com",
    fullName: "Mahendra Singh Dhoni",
    password: "123456",
    profilePic: "https://images.app.goo.gl/SFo6DGZZpQthvHmJA",
  },
  {
    email: "amelia.garcia@example.com",
    fullName: "Amelia Garcia",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  {
    email: "james.anderson@example.com",
    fullName: "James Anderson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "william.clark@example.com",
    fullName: "William Clark",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "benjamin.taylor@example.com",
    fullName: "Benjamin Taylor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "lucas.moore@example.com",
    fullName: "Lucas Moore",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "henry.jackson@example.com",
    fullName: "Henry Jackson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "alexander.martin@example.com",
    fullName: "Alexander Martin",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "daniel.rodriguez@example.com",
    fullName: "Daniel Rodriguez",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();