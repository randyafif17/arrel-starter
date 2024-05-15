import mongoose from "mongoose"

// const connection = {};

// export const connectToDb = async () => {
//   try {
//     if(connection.isConnected) {
//       console.log("Using existing connection");
//       return;
//     }
//     const db = await mongoose.connect(process.env.MONGO);
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

const connectToDb = async () => {
  if (mongoose.connection[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Mongodb connected')
    return true;
  } catch (error) {
    console.log(error)
  }
}

export default connectToDb;