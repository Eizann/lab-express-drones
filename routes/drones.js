const express = require('express');
const Drone = require('../models/Drone.model.js');
const router = express.Router();


// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then(drone => {
    res.render('drones/list', {
      drone
    })
  })
  .catch(e => console.error(e));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    await Drone.create(req.body);
    res.redirect("/drones");
  } catch(e) {
    next(e);
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
  .then((drone) => {
    res.render('drones/update-form.hbs', { droneToEdit: drone });
  })
  .catch(next);
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    await Drone.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/drones");
  } catch(e) {
    next(e);
  }
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
  .then((success) => res.redirect("/drones"))
  .catch(next);
});

module.exports = router;