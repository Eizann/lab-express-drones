// Iteration #1
const { model,  Schema } = require("mongoose");

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})  

const Drone = model("Drones", droneSchema);

module.exports = Drone;