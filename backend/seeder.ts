import dotenv from "dotenv";
import users from "./data/users";
import products from "./data/products";
import { User, Product, Order } from "./models/";
import { UserDocument, Review } from "./types/";
import connectDB from "./config/db";

/**
 * Helper file that is used for adding and removing test data to the database
 */

dotenv.config();

connectDB();

/**
 * Destroy existing data and seed new data into the database
 * This will populate a list of products with a default admin user
 */
const importData = async () => {
  try {
    // Clear any existing items from DB
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser: UserDocument = createdUsers[0]._id;

    // Create sample products set w/ Admin user
    const sampleProducts = products.map((p) => {
      return { ...p, user: adminUser.id };
      // TODO: Add reviews to products
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

/**
 * Destroy all data on the database
 */
const destroyData = async () => {
  try {
    // Clear any existing items from DB
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");

    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

// Check command line args to destroy or import data
process.argv[2] === "-d" ? destroyData() : importData();
