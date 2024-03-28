import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `Mongo DB is connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongo DB connection error: ", error.message);
    process.exit(1);
  }
};

export default connect;
