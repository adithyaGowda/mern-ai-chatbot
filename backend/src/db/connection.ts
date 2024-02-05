import { connect, disconnect } from "mongoose";

const connectTODatabase = async () => {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Connection To DB Failed");
  }
}

const disconnectFromDatabase = async () => {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Connection To DB Failed");
  }
}

export { connectTODatabase, disconnectFromDatabase };
