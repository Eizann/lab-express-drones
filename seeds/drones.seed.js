// Iteration #1
require("../db/index");
const mongoose = require("mongoose");

const Drone = require("../models/Drone.model");

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  (async function() {
    try {
        await Drone.deleteMany();
        const createdDrones = await Drone.create(drones);
        console.log(`Just created ${createdDrones.length} 🦆`);
        mongoose.connection.close(() => {
            console.log("Connection to database closed.");
            process.exit();
        })
    } catch (error) {
        mongoose.connection.close(() => {
            console.error(error);
        })
    }
  })();