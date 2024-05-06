const mongoose = require('mongoose');

const connectingToDB = async () => {
  try {
    const connecting = await mongoose.connect(
      `${process.env.MONGODB_CONNECT_URI}`
    );
    console.log(`Connected to ${connecting.connection.host}`);
  } catch (err) {
    console.log(`Could not connect ${err}`);
  }
};

module.exports = connectingToDB;
