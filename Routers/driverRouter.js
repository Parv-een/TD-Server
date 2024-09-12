import express from "express";
import { driverDummy } from './DummyData/Driver.js';
import Driver from "../models/Driver.js";

const driverRouter = express.Router();

driverRouter.get("/:driverID", async (_, res) => {
    const userId = req.params.userId;
    
    try {

        const user = await Driver.findById(userId);
      if (!user) res.status(404).send(USER_NOT_FOUND_MESSAGE);
    
    
        return res.send({
            driverId: user.id,
            firstName: user.firstName,
           lastName: user.lastName,
            email: user.email,
            dateOfBirth: user.dateOfBirth,
            address: user.address,
     });
    } catch (error) {
           return res.status(500).send(error);
    }
    
    });

driverRouter.post("/", (req, res) => {
    const newDriver = {
        ...req.body,
        id: driverDummy.length + 1,
    };

    driverDummy.push(newDriver);

    res.status(201).send(newDriver);
    
});

driverRouter.put("/:driverID", (req, res) => {
    const driverID = req.params.driverID;
   
    const driverToUpdate = driverDummy.find(p => p.id === req.params.driverID);

    if (!driverToUpdate) return res.status(404).send("Driver Not Found");

    driverToUpdate.firstName = req.body.firstName;
    driverToUpdate.lastName = req.body.lastName;

    res.send(driverToUpdate);
    
});

driverRouter.delete("/: driverID"), (req, res) => {
    const driverID = req.params.driverID; 
    
    const driverToDelete = driverDummy.find(p => p.id === req.params.driverID);
    
    if (driverToDelete === -1)
        return res.status(404).send("Driver not found");

    const deletedDriver = driverDummy.splice(driverToDelete, 1);

    res.send(deletedDriver[0]);
  
    
}

export default driverRouter;
