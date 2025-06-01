const Mongoose = require('./db');
const Trip = require('./travlr');
const fs = require('fs');

// Read seed data from JSON file
let trips;
try {
  trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
  console.log("Loaded trips from file:", trips.length);
} catch (err) {
  console.error("Error reading trips JSON file:", err);
  process.exit(1);
}

const seedDB = async () => {
  try {
    const deleteResult = await Trip.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} existing trips.`);

    const insertResult = await Trip.insertMany(trips);
    console.log(`Inserted ${insertResult.length} new trips.`);
  } catch (err) {
    console.error("Error during seeding process:", err);
  }
};

seedDB()
  .then(async () => {
    await Mongoose.connection.close();
    console.log("MongoDB connection closed.");
    process.exit(0);
  });
