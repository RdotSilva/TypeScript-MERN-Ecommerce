import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users";
import products from "./data/products";
import User from "./models/userModel";
import Product from "./models/productModel";
import Order from "./models/orderModel";
import connectDB from "./config/db";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Clear any existing items from DB
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    // Create sample products set w/ Admin user
    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
