import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    id: { type: Number, required: true },
    dateOfBirth: { type: Date, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    status: { type: String, required: true },
    address: { 
        type: {
            street: { type: String, required: true },
            number: { type: Number, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zip: { type: String, required: true },
            country: { type: String, required: true },
            unit: { type: String },
        },
        required: true,
     },
  
drivers: [{ type: mongoose.Types.ObjectId, required: true, ref: "Driverlist" }],

});

const Driver = mongoose.model("Driver", driverSchema);

export default Driver;